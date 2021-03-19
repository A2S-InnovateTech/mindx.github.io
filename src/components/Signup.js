import React from 'react'
import './Signup.css';
import logo from '../images/logo.png';

function Signup() {
    return (
        <div>
           <div className="navbar-s">
                <div className="logo-s"><img src={logo}></img></div>
                <div className="options-s">
                    <div className="option-1-s">
                        Home
                    </div>
                    <div className="option-2-s">
                        About Us
                    </div>
                    <div className="option-3-s">
                        Contact us
                    </div>
                </div>
                <div className="buttons-s">
                    <button className="login-btn-s">Login</button>
                    <button className="signup-btn-s">SignUp</button>
                </div>
            </div>
            <div className="total-p-s">
                <div className="left-p-s">
            <img className="picture-s" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            <div className="blank-s"></div>
            </div>
                <div className="right-p-s">
                <span className="title-s">SIGNUP</span>
                <div className="forms-s">
                    <input className="form-1-s" type="text" placeholder="  Full Name"></input>
                    <input className="form-2-s" type="text" placeholder="  Email Id"></input>
                    <span className="form-div">
                    <input className="form-3-s" type="text" placeholder="  Mobile No."></input>
                    <input className="form-4-s" type="text" placeholder="  Class"></input>
                    </span>
                    <input className="form-5-s" type="text" placeholder="  School Name"></input>
                    <input className="form-6-s" type="text" placeholder="  Guardian's Name"></input>
                    <span className="form-div">
                    <input className="form-7-s" type="text" placeholder="  Relation"></input>
                    <input className="form-8-s" type="text" placeholder="  Mobile No."></input>
                    </span>
                </div>

                <button className="final-btn-s">SignUp</button>
                <span className="footer-s">Already have an account? Login Now</span>

                </div>
                   


                    
                
            
                
                
               

                
                </div>
        </div>
    )
}

export default Signup
