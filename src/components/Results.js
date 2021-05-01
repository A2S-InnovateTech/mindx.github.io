import React from 'react'
import check from '../images/check.png';
import Logo from '../images/logo.png';
import './Results.css';
import {Link} from 'react-router-dom';

function Results(props) {
    console.log(props);
    return (
        <div className="result">
            <div className="header">
        </div>
            <div className="info">Congratulations !! You passed the test 1</div>
            <img className="check-icon" src={check}></img>
            <div className="answers">
                Your score is {props.props.marks || 12} out of 15
            </div>
            <div className="btns">
                <button className="btn-1">Download Report</button>
                <button className="btn-2">Share Result</button>
                <Link to="/test" to={{
                            pathname:"/test",
                            state: { testNo: 2 }
                        }} style={{textDecoration:"none", color:"white"}}>
                    <button className="btn-3">Start Test 2</button>
                </Link>
            </div>
            <span className="footer-r">All rights are reserved MindX 2021</span>
            <div className="footer-r-m">All rights are reserved MindX 2021</div>
            <div className="baseline"></div>
            <div className="baseline-m"></div>


        </div>
    )
}

export default Results
