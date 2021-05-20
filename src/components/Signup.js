import React, { useCallback, useState, useEffect } from 'react'
import './Signup.css';
import logo from '../images/logo.png';
import app from '../firebase';
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import firebase from 'firebase';
import SelectSearch from 'react-select-search';
import image from '../images/signup_image.png';
import dots from '../images/login_background_dots.png';
import line1 from '../images/signup__line_1.png'
import line2 from '../images/signup__line_2.png'

function Signup({history}) {
        const [fullname, setFullName] = useState("");
        const [mobile, setMobile] = useState("");
        const [email, setEmail] = useState("");
        const [Class, setClass] = useState("");
        const [school, setSchool] = useState("");
        const [password, setPassword] = useState("");
        const [relation, setRelation] = useState("");
        const [relationNo, setRelationNo] = useState("");
        const [schoolNames, setSchoolNames] = useState([]);
        const [addSchoolManual, setAddSchoolManual] = useState(false);

        useEffect(() => {
            console.log(school);
        }, [school])

       const handleSignUp = (e) => {
           e.preventDefault();
           try {
                app
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((authUser) => {
                    console.log(authUser.user.updateProfile({ displayName:fullname })
                    .then(()=>{
                        // history.push("/")
                        updateUserDetails(authUser.user)
                    })
                    .catch(e=>{console.log("Error:",e);}));
                })
                .catch(e => console.log(e));
           } catch (error) {
               alert(error);
           }       
        };

        const getSchoolDetails = () => {
            app.firestore().collection("schools")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                    doc => {
                        var city = doc.data().city?", "+doc.data().city:"";
                        var finalSchoolName = doc.data().name + city;
                        var schoolObject = {name: finalSchoolName, value: doc.id};
                        setSchoolNames(oldSchoolNames => [...oldSchoolNames, schoolObject]);
                    }
                )
            })
            .catch(e=>console.log(e));
        }

        useEffect(() => {
            getSchoolDetails();
        }, [])

        const updateUserDetails = (user) => {

            if(addSchoolManual){
                app.firestore().collection("schools").add({
                    name: school
                })
                .then((docRef)=>{
                    app.firestore().collection("users").doc(user.uid).set({
                        name: fullname,
                        assessmentTaken: false,
                        class: Class,
                        phoneNumber: mobile,
                        relation,
                        relativeNumber: relationNo,
                        school: docRef.id,
                        userType: "student",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(()=>history.push('/'))
                    .catch(e=>console.log("Error in updating details: ", e))
                })
                .catch(e=>console.log("Error in updating school details: ", e))
            }
            else{
                app.firestore().collection("users").doc(user.uid).set({
                    assessmentTaken: false,
                    class: Class,
                    phoneNumber: mobile,
                    relation,
                    relativeNumber: relationNo,
                    school,
                    userType: "student",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(()=>history.push('/'))
                .catch(e=>console.log("Error in updating details: ", e))
            }
        }


    return (
        <div className="login">
            {/* <div className="mobile__head"><img src={logo}></img></div> */}
           <div className="navbar-s">
                <div className="logo-s"><img src={logo}></img></div>
                <div className="options-s">
                    <div className="option-1-s">
                        <Link to="/" style={{textDecoration:"none", color:"#FFF5D1"}}>Home</Link>
                    </div>
                    <div className="option-2-s">
                        About Us
                    </div>
                    <div className="option-3-s">
                        Contact us
                    </div>
                </div>
                <div className="buttons-s">

                <Link to="/login"> <button className="login-btn-s">Login</button></Link>  
                    <button className="signup-btn-s">SignUp</button>

                </div>
            </div>
            <div className="total-p-s">
                <div className="left-p-s">
            <img src={dots} alt="Dots" className="login__dots_1 signup__dots_1"/>
            <img src={dots} alt="Dots" className="login__dots_2 signup__dots_2"/>
            <div className="signup__blank-s"></div>
            <img className="signup__picture-s" src={image}></img>
            <img className="line-1 signup__line_1" src={line1}></img>
            <img className="line-2 signup__line_2" src={line2}></img>
            </div>
                <div className="right-p-s">
                <span className="signup__title-s">SIGNUP</span>
                <form>
                <div className="signup__forms-s">
                    
                    <input name="fullname" className="signup__form-s" type="text" placeholder="  Full Name" value={fullname} onChange={(e)=>{setFullName(e.target.value)}} required></input>
                    <label>
                    <input name="email" className="signup__form-s" type="email" placeholder="  Email Id" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                    </label>
                    <span className="form-div-s">
                    <input className="signup__form-1-s" type="text" placeholder="  Mobile No." value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required></input>
                    <input className="signup__form-1-s" type="text" placeholder="  Class" value={Class} onChange={(e)=>{setClass(e.target.value)}} required></input>
                    </span>
                    <form autocomplete="off">
                    {addSchoolManual
                        ? <input className="signup__form-s" type="text" placeholder="  Enter School Name Manually" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input> 
                        : <SelectSearch options={schoolNames} value="sv" closeOnSelect={true} name="SchoolName" placeholder="  Select School Name" search autoComplete="on" onChange={(e)=>{setSchool(e)}}/>
                    }
                    {!addSchoolManual && <div className="notInList" onClick={()=>setAddSchoolManual(true)}>School not in list?</div>}
                    </form>
                    <label>
                    <input name="password" className="signup__form-s" type="password" placeholder="  Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                    </label>
                    <span className="form-div-s">
                    <input className="signup__form-1-s" type="text" placeholder="  Relation" value={relation} onChange={(e)=>{setRelation(e.target.value)}} required></input>
                    <input className="signup__form-1-s" type="text" placeholder="  Mobile No." value={relationNo} onChange={(e)=>{setRelationNo(e.target.value)}} required></input>
                    </span>
                    
                </div>

                <button onClick={(e)=>handleSignUp(e)}className="signup__final-btn-s">SignUp</button>
                </form>
                <span className="end-s">
               <Link to="/login"><span className="signup__footer-s">Already have an account?</span></Link>
                <Link to="/teacher/signup"><span className="signup__footer_left">Are you a teacher? Sign Up here</span></Link>
                </span>

                </div>
                </div>
        </div>
    )
}

export default withRouter(Signup);
