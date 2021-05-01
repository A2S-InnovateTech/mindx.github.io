import React from 'react'
import Sidebar from './Sidebar/index'
import Back from '../images/back-icon.png';
import "./Assesment.css";
import  Cross from "../images/cross.png"
import file from "../images/file.png";
import upload from '../images/upload.png'
import rect from '../images/rect.png';
import {Link, withRouter} from 'react-router-dom';
import down from "../images/down.png"
import grade from "../images/grade.png";

function Assesment(props) {
    console.log(props);
    return (
        <div>
        <div className="top-line"></div>
        <div className="head">
            <span className="back">
            <Link to="/assignment"><img className="back-icon" src={Back}></img></Link>
            </span>
            <span className="title-a">My Assignments</span>
            <span className="line"></span>   
            </div>
            <span className="table-t">
                <span className="s-no-1">1</span>
                <span className="ass-1">{props?.props?.subject+" Assignment"||'English Assignment'}</span>
                <span className="dt"> Due Date: 15/03/2021</span>
                <img className="x" src={Cross}></img>
            </span>
            <span className="table-c-1">
            <div className="info-1">
                <span className="as-dt">Assignment Date: 11/03/2021</span>
                <span className="as-st">Status: Undone</span>
            </div>
           
            <div className="ass-buttons">
                <span className="ass-btn-1">
                <span className="rect"></span>
                <img className="icon-btn" src={file}></img>
                    <span className="ass-btn-1-info">View Assignment</span>
                </span>
                <span className="ass-btn-2">
                <span className="rect"></span>
                <img  className="icon-btn" src={upload}></img>
                <span className="ass-btn-2-info">Upload Assignment</span>
                </span>
                <span className="ass-btn-3">
                <span className="rect"></span>
                <img  className="icon-btn" src={down}></img>
                <span className="ass-btn-3-info">Download My Solution</span>
                </span>
                <span className="ass-btn-4">
                <span className="rect"></span>
                <img  className="icon-btn" src={grade}></img>
                    <span className="ass-btn-4-info">View My Grade</span>
                </span>
            </div>

            <button className="sub-btn">Submit</button>
            </span>

           


         <span className="footer-a">All rights are reserved MindX 2021</span>    
        <div className="bottom-line"></div>    
            
        </div>
    )
}

export default Assesment
