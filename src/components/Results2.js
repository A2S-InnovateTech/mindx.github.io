import React from 'react'
import { Link } from 'react-router-dom';
import check from '../images/check.png';
import Logo from '../images/logo.png';
import './Results.css';

function Results2() {
    return (
        <div className="r-screen">
            <div className="header">
            <img src={Logo} alt="MindX Logo"/>
        </div>
            <div className="info">Congratulations !! You passed the test 2</div>
            <img className="check-icon" src={check}></img>
            <div className="answers">
                Your score is 12 out of 15
            </div>
            <div className="btns">
                <button className="btn-1">Download Report</button>
                <button className="btn-2">Share Result</button>
               <Link to="/dashboard"><button className="btn-3">Go to dashboard</button></Link> 
            </div>
            <span className="footer-r">All rights are reserved MindX 2021</span>
            <div className="footer-r-m">All rights are reserved MindX 2021</div>
            <div className="baseline"></div>
            <div className="baseline-m"></div>
        </div>
    )
}

export default Results2
