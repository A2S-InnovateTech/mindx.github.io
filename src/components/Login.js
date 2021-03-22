import React, { useCallback, useContext } from 'react'
import './Login.css'
import logo from '../images/logo.png';
import line1 from '../images/line1.png'
import line2 from '../images/line2.png'
import GoogleLogo from '../images/google.png';
import app from '../firebase';
 import { AuthContext } from '../Auth';
import { Redirect, withRouter } from 'react-router';
import firebase from 'firebase/app';
import {Link} from "react-router-dom";

function Login({ history }) {

    const handleGoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
    history.push("/dashboard");
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

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
        }
        
},[history]);

   const  currentUser  = useContext(AuthContext);

   if (currentUser) {
       return <Redirect to="/" />
   }

    return (
        <div className="login">
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
            <span className="title">LOGIN</span>
            <form onSubmit={handleLogin}>
            <label>
            <input name="email" type="email" className="form-1" placeholder="  Enter you mail id" required></input>
            </label>
            <label>
            <input name="password" className="form-2" placeholder="  Password" type="password" required></input>
            </label>
            <button type="submit" className="final-btn">Login</button>
            </form>
            <span className="f-pass">Forgot Password?</span>
            <span className="signup-l">New User? Signup Here</span>
            <span className="social">Or Login With:</span>
            <span className="social-icons">
                <img src={GoogleLogo} width="15px" onClick={()=>handleGoogleLogin()}></img>
            </span>
            </div>
            <div className="right-p">
            <img className="picture" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            {/* <img className="line-1" src={line1}></img>
            <img className="line-2" src={line2}></img> */}
            <div className="blank"></div>
            </div>
            </div>
            
            
        </div>
    )
}

export default withRouter(Login)
