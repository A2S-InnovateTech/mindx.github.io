import React from 'react';
import Back from './images/back-icon.png';
import "./AssignmentT.css"
import plus from "./images/plus-icon.png";

function AssignmentsT() {
    return (
        <div>
             <div className="top-line"></div>
             <div className="head">
            <span className="back">
            <img className="back-icon" src={Back}></img>
            </span>
            <span className="title-a">My Assignments</span>
            <span className="line"></span>   
            </div>
            <span className="table-t"><span className="table-at">Previous Assignments</span></span>
            <span className="content">
            <span className="table-c">
           
            <table>
                   <tr class="noBorder deco">
                       <td>S No.</td>
                       <td>Assignment Name</td>
                       <td>Class</td>
                       <td>Submissions</td>
                       <td>Status</td>
                   </tr>

                   <tr class="noBorder">
                       <td>1</td>
                       <td>Assignment 2</td>
                       <td>11th A</td>
                       <td>43/50</td>
                       <td>View</td>
                   </tr>

                   <tr class="noBorder">
                       <td>2</td>
                       <td>Assignment 2</td>
                       <td>11th B</td>
                       <td>23/50</td>
                       <td>View</td>
                   </tr>
                   
                   <tr class="noBorder">
                       <td>3</td>
                       <td>Assignment 1</td>
                       <td>12th B</td>
                       <td>34/50</td>
                       <td>View</td>
                   </tr>

                   </table>
            </span>
            <span className="table-line"></span>
            </span>
            <div className="bot">
            <span className="circle-add">
            <img className="plus" src={plus}></img>    
            </span>    
            </div>
            <span className="footer-a">All rights are reserved MindX 2021</span>
             <div className="bottom-line"></div>   
        </div>
    )
}

export default AssignmentsT
