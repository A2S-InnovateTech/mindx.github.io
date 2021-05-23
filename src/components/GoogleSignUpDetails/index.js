import './GoogleSignUpDetails.css';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logo from '../../logo.png';
import firebase from 'firebase';
import app from '../../firebase';

function GoogleSignUpDetails({user}) {
    const [fullname, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [Class, setClass] = useState("");
    const [school, setSchool] = useState("");
    const [relation, setRelation] = useState("");
    const [relationNo, setRelationNo] = useState("");
    let history = useHistory();

    const updateUserDetails = (e) => {
        if(fullname === ""|| mobile === ""|| Class === ""|| school === ""|| relation === ""|| relationNo === ""){
            alert("Please enter all the details!");
            return;
        }
        app.firestore().collection("users").doc(user?.uid).set({
            name: fullname,
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

    return (
        <div className = "GoogleSignUp">
            <div className="navbar-s dark-bg pt-5">
                <div className="logo-s"><img src={logo}></img></div>
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

                <input className="form-1-gs" type="text" placeholder="  School Name" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input>

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
