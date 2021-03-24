import React from 'react'
import check from '../images/check.png';
import Logo from '../images/logo.png';
import './Results.css';


function Results() {
    return (
        <div className="result">
            <div className="header">
            <img src={Logo} alt="MindX Logo"/>
        </div>
            <div className="info">Congratulations !! You passed the test 1</div>
            <img className="check-icon" src={check}></img>
            <div className="answers">
                Your score is 12 out of 15
            </div>
            <div className="btns">
                <button className="btn-1">Download Report</button>
                <button className="btn-2">Share Result</button>
                <button className="btn-3">Start Test 2</button>
            </div>
            <span className="footer-r">All rights are reserved MindX 2021</span>
            <div className="footer-r-m">All rights are reserved MindX 2021</div>
            <div className="baseline"></div>
            <div className="baseline-m"></div>


        </div>
    )
}

export default Results