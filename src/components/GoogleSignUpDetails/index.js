import './GoogleSignUpDetails.css';
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../logo.png';
import firebase from 'firebase';
import app from '../../firebase';
import SelectSearch from 'react-select-search';

function GoogleSignUpDetails({user}) {
    const [fullname, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [Class, setClass] = useState("");
    const [school, setSchool] = useState("");
    const [relation, setRelation] = useState("");
    const [relationNo, setRelationNo] = useState("");
    const [schoolNames, setSchoolNames] = useState([]);
    const [addSchoolManual, setAddSchoolManual] = useState(false);

    let history = useHistory();
    useEffect(() => {
        console.log(school);
    }, [school])

    useEffect(() => {
        getSchoolDetails();
    }, [])

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

    const updateUserDetails = (e) => {
        if(fullname === ""|| mobile === ""|| Class === ""|| school === ""|| relation === ""|| relationNo === ""){
            alert("Please enter all the details!");
            return;
        }
        // app.firestore().collection("users").doc(user?.uid).set({
        //     name: fullname,
        //     assessmentTaken: false,
        //     class: Class,
        //     phoneNumber: mobile,
        //     relation,
        //     relativeNumber: relationNo,
        //     school,
        //     userType: "student",
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // })
        // .then(()=>history.push('/'))
        // .catch(e=>console.log("Error in updating details: ", e))

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
                        school: school,
                        school_id: docRef.id,
                        userType: "student",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(()=>history.push('/'))
                    .catch(e=>console.log("Error in updating details: ", e))
                })
                .catch(e=>console.log("Error in updating school details: ", e))
            }
            else{
                app.firestore().collection("schools").doc(school).get()
                .then((doc)=>{
                    app.firestore().collection("users").doc(user.uid).set({
                        assessmentTaken: false,
                        class: Class,
                        phoneNumber: mobile,
                        relation,
                        relativeNumber: relationNo,
                        school_id: school,
                        school: doc.data().name,
                        userType: "student",
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(()=>history.push('/'))
                    .catch(e=>console.log("Error in updating details: ", e))
                })
            }
        }
     

    return (
        <div className = "GoogleSignUp">
            <div className="navbar-s dark-bg pt-5">
                <div className="logo-gs"><img src={logo}></img></div>
                <div className="options-s vert-center-align">
                    <div className="option-1-s vert-center-align">
                        <Link to="/" style={{textDecoration:"none", color:"#FFF5D1"}}>Home</Link>
                    </div>
                    <div className="option-2-s vert-center-align">
                        About Us
                    </div>
                    <div className="option-3-s vert-center-align">
                        Contact us
                    </div> 
                </div>
            </div>

            <div className="GoogleSignUp__form">
                <h1 className="h1__white">Enter Details</h1>

                <input name="fullname" className="form-1-gs" type="text" placeholder="  Full Name" value={fullname} onChange={(e)=>{setFullName(e.target.value)}} required></input>

                <span className="form-div">
                <input className="GoogleSignUp__form_3 form-3-gs" type="text" placeholder="  Section" required></input>
                    <input className="form-3-gs" type="text" placeholder="  Class" value={Class} onChange={(e)=>{setClass(e.target.value)}} required></input>
                </span>

                <input className="GoogleSignUp__form_3 form-1-gs" type="text" placeholder="  Mobile No." value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required></input>

                {/* <input className="form-1-gs" type="text" placeholder="  School Name" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input> */}
                <form className="gs-form" autocomplete="off">
                    {addSchoolManual
                        ? <input className="signup__form-s" type="text" placeholder="  Enter School Name Manually" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input> 
                        : <SelectSearch options={schoolNames} value="sv" closeOnSelect={true} name="SchoolName" placeholder="  Select School Name" search autoComplete="on" onChange={(e)=>{setSchool(e)}}/>
                    }
                    {!addSchoolManual && <div className="notInList" onClick={()=>setAddSchoolManual(true)}>School not in list?</div>}
                </form>
                <span className="form-div">
                    <input className="form-3-gs" type="text" placeholder="  Relation" value={relation} onChange={(e)=>{setRelation(e.target.value)}} required></input>
                    <input className="form-3-gs" type="text" placeholder="  Mobile No." value={relationNo} onChange={(e)=>{setRelationNo(e.target.value)}} required></input>
                </span>
                

                <button onClick={(e)=>updateUserDetails(e)} className="final-btn-s" style={{marginLeft: "-1px", marginTop: "20px"}}>Continue</button>
            </div>
            
        </div>
    )
}

export default GoogleSignUpDetails
