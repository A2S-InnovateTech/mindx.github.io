import React from 'react'
import './Login.css'
import logo from '../images/logo.png';
import line1 from '../images/line1.png'
import line2 from '../images/line2.png'

function Login() {
    return (
        <div className="login">
            <div className="navbar">
                <div className="logo"><img src={logo}></img></div>
                <div className="options">
                    <div className="option-1">
                        Home
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
                    <button className="signup-btn">SignUp</button>
                </div>
            </div>
             
            <div className="total-p">
            <div className="left-p">
            <span className="title">LOGIN</span>
            <input className="form-1" placeholder="  Enter you mail id"></input>
            <input className="form-2" placeholder="  Password" type="password"></input>
            <button className="final-btn">Login</button>
            <span className="f-pass">Forgot Password?</span>
            <span className="signup-l">New User? Signup Here</span>
            <span className="social">Or Login With:</span>
            <span className="social-icons">
                <img src="https://www.flaticon.com/svg/vstatic/svg/124/124010.svg?token=exp=1616077294~hmac=28d0e44e292769c23bb2a0efc999f9f2"></img>
                <img src="https://www.flaticon.com/svg/vstatic/svg/124/124013.svg?token=exp=1616077407~hmac=b2166226be21fb3e12a210d5ef08a93a"></img>
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1616077454~hmac=bfeac35f5dd19605e3c04194872712f9"></img>
                <img src="https://www.flaticon.com/svg/vstatic/svg/124/124021.svg?token=exp=1616077519~hmac=beb9d228f77b5e8a044d58bbd705855f"></img>
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

export default Login
