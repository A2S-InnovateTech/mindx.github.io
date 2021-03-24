import React from 'react'
import Sidebar from './Sidebar/index'
import './Assignment.css'
import Back from '../images/back-icon.png';


function Assignment() {
    return (
        <div className="assignment">
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <div className="head">
            <span className="back">
            <img className="back-icon" src={Back}></img>
            </span>
            <span className="title-a">My Assignments</span>
            <span className="line"></span>   
            </div>
            <span className="table-t">
                <span className="t-1">S No.</span>
                <span className="t-2">Assignment Name</span>
                <span className="t-3">Date</span>
                <span className="t-4">Due Date</span>
                <span className="t-5">Status</span>
            </span>
            <div className="table-r">
            <span className="table-c">
                <div className="first">
                    <span className="first-1">1</span>
                    <span className="first-2">English Assignment</span>
                    <span className="first-3">11/03/21</span>
                    <span className="first-4">15/03/21</span>
                    <span className="first-5">Not done</span>
                    <span className="first-6">View</span>
                </div>
                <div className="second">
                    <span className="second-1">2</span>
                    <span className="second-2">Physics Assignment</span>
                    <span className="second-3">11/03/21</span>
                    <span className="second-4">15/03/21</span>
                    <span className="second-5">Graded</span>
                    <span className="second-6">View</span>
                </div>
                <div className="third">
                <span className="third-1">3</span>
                <span className="third-2">Physics Assignment</span>
                <span className="third-3">11/03/21</span>
                <span className="third-4">15/03/21</span>
                <span className="third-5">Ungraded</span>
                <span className="third-6">View</span>
                </div>
                <div className="fourth">
                <span className="fourth-1">4</span>
                <span className="fourth-2">Physics Assignment</span>
                <span className="fourth-3">11/03/21</span>
                <span className="fourth-4">15/03/21</span>
                <span className="fourth-5">Ungraded</span>
                <span className="fourth-6">View</span>
                </div>
                <div className="fifth">
                <span className="fifth-1">5</span>
                <span className="fifth-2">Physics Assignment</span>
                <span className="fifth-3">11/03/21</span>
                <span className="fifth-4">15/03/21</span>
                <span className="fifth-5">Ungraded</span>
                <span className="fifth-6">View</span>
                </div>
            </span>
            <span className="table-line"></span>
            </div> 
            <span className="footer-a">All rights are reserved MindX 2021</span>
           
            <Sidebar/>
        </div>
    )
}

export default Assignment
