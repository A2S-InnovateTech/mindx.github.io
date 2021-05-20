import React, { useCallback, useState, useEffect } from 'react'
import './Signup.css';
import logo from '../../images/logo.png';
import app from '../../firebase';
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import firebase from 'firebase';
import dots from '../../images/login_background_dots.png';
import line1 from '../../images/signup__line_1.png';
import line2 from '../../images/signup__line_2.png'
import image from '../../images/signup_image.png';
import SelectSearch from 'react-select-search';

function TeacherSignup({history}) {
        const [schoolNames, setSchoolNames] = useState([]);
        const [addSchoolManual, setAddSchoolManual] = useState(false);
        const [fullname, setFullName] = useState("");
        const [mobile, setMobile] = useState("");
        const [email, setEmail] = useState("");
        const [school, setSchool] = useState("");
        const [password, setPassword] = useState("");
        const [role, setRole] = useState("");
        const [subject, setSubject] = useState("");
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

        const updateUserDetails = (user) => {
            if(addSchoolManual){
                app.firestore().collection("schools").add({
                    name: school
                })
                .then((docRef)=>{
                    app.firestore().collection("users").doc(user.uid).set({
                        name: fullname,
                        assessmentTaken: false,
                        subject: subject,
                        phoneNumber: mobile,
                        school_id: docRef.id,
                        school: school,
                        userType: role,
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
                    subject: subject,
                    phoneNumber: mobile,
                    school,
                    userType: role,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(()=>history.push('/'))
                .catch(e=>console.log("Error in updating details: ", e))
            }
        }


    return (
        <div className="login">
             <div className="mobile__head-teach"><img src={logo}></img></div>
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
                <div className="right-p-s-t">
                <span className="title-s">SIGNUP</span>
                <form> 
                <div className="forms-s">
                    
                    <input name="fullname" className="form-1-si" type="text" placeholder="  Full Name" value={fullname} onChange={(e)=>{setFullName(e.target.value)}} required></input>
                    <label>
                    <input name="email" className="form-1-si" type="email" placeholder="  Email Id" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                    </label>
                    <span className="form-div">
                    <input className="form-3-si" type="text" placeholder="  Mobile No." value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required></input>
                    {/* <input className="form-3-si" type="text" placeholder="  Subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} required></input> */}
                    <select className="form-3-si signup_as" value={role} onChange={(e)=>{setSubject(e.target.value)}}required> 
                        <option value="" disabled selected>Subject</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="maths">Maths</option>
                        <option value="evs">EVS</option>
                        <option value="science">Science</option>
                        <option value="social-science">Social Science</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="maths">Maths</option>
                        <option value="biology">Biology</option>
                    </select>
                    </span>
                    {/* <input className="form-1-si" type="text" placeholder="  School Name" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input> */}
                    <form autocomplete="off" className="teacher_school">
                    {addSchoolManual
                        ? <input className="signup__form-s" type="text" placeholder="  Enter School Name Manually" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input> 
                        : <SelectSearch options={schoolNames} value="sv" closeOnSelect={true} name="SchoolName" placeholder="  Select School Name" search autoComplete="on" onChange={(e)=>{setSchool(e)}}/>
                    }
                    {!addSchoolManual && <div className="notInList" onClick={()=>setAddSchoolManual(true)}>School not in list?</div>}
                    </form>
                    <label>
                    <input name="password" className="form-1-si" type="password" placeholder="  Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                    </label>

                    <select className="form-1-si signup_as" value={role} onChange={(e)=>{setRole(e.target.value)}}required> 
                        <option value="teacher">Teacher</option>
                        <option value="class-teacher">Class Teacher</option>
                        <option value="principal">Principal</option>
                    </select>
                    
                </div>

                <button onClick={(e)=>handleSignUp(e)}className="final-btn-s">SignUp</button>
                </form>
               <Link to="/login"><span className="footer-s">Already have an account? Login Now</span></Link>

                </div>
                </div>
        </div>
    )
}

export default withRouter(TeacherSignup);
