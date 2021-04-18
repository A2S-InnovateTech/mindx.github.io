import React, { useCallback, useContext } from 'react'
import './Login.css'
import logo from '../images/logo.png';
import line1 from '../images/line1.png'
import line2 from '../images/line2.png'
import dots from '../images/login_background_dots.png';
import GoogleLogo from '../images/google.png';
import app from '../firebase';
 import { AuthContext } from '../Auth';
import { Redirect, withRouter } from 'react-router';
import firebase from 'firebase/app';
import {Link} from "react-router-dom";

function Login({ history, setUser }) {
    console.log(setUser);
    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setUser(user);
                console.log(user);
                updateUserDetails(user);
            }).catch((error) => {
                console.log(error);
            });
    } 

    const updateUserDetails = (user) => {
        app.firestore().collection("users").doc(user.uid).get()
            .then(snapshot=>{
              if(!snapshot.exists){
                  app.firestore().collection("users").doc(user.uid).set({
                    assessmentTaken: false,
                    class: null,
                    phoneNumber: null,
                    relation: null,
                    relativeNumber: null,
                    school: null,
                    userType: "student",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(()=>history.push("/signup-details"))
                .catch(e=>console.log("Error in updating details: ", e))
                }
                else{
                    console.log("Old User");
                }
            })
    }

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            history.push("/dashboard");
        } catch (error) {
            alert(error);
            console.log(error);
        }
        
},[history]);

   const  currentUser  = useContext(AuthContext);

   if (currentUser) {
       return <Redirect to="/" />
   }

    return (
        <div className="login">
            <div className="mobile__head"><img src={logo}></img></div>
            <div className="navbar">
                <div className="logo"><img src={logo}></img></div>
                <div className="options">
                    <div className="option-1">
                        <Link to="/" style={{textDecoration:"none", color:"#FFF5D1"}}>Home</Link>
                    </div>
                    <div className="option-2">
                        About Us
                    </div>
                    <div className="option-3">
                        Contact us
                    </div>
                </div>
                <div className="buttons">
           

                <button className="login-btn">Login</button>
                <Link to="/signup"><button className="signup-btn">SignUp</button></Link>
                </div>
            </div>
             
            <div className="total-p">
            <div className="left-p">
            <span className="login__title">LOGIN</span>
            <form onSubmit={handleLogin} className="login__form">
            <input name="email" type="email" className="form-1" placeholder="  Enter you mail id" required></input>
            <input name="password" className="form-2" placeholder="  Password" type="password" required></input>
            <button type="submit" className="final-btn">Login</button>
            </form>
            <span className="f-pass">Forgot Password?</span>
            <Link to="/signup"><span className="signup-l">New User? Signup Here</span></Link>
            <div className="social">Or Login With:
                <img src={GoogleLogo} width="30px" onClick={()=>handleGoogleLogin()}></img>
            </div>
            </div>
            <div className="right-p">
            <img className="picture" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            <img src={dots} alt="Dots" className="login__dots_1"/>
            <img src={dots} alt="Dots" className="login__dots_2"/>
            <img className="line-1" src={line1}></img>
            <img className="line-2" src={line2}></img>
            <div className="blank"></div>
            </div>
            </div>
            
            
        </div>
    )
}

export default withRouter(Login)
