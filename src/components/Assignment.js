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
               <table>
                   <tr class="noBorder">
                       <td>1</td>
                       <td>English Assignment</td>
                       <td>11/03/21</td>
                       <td>15/03/21</td>
                       <td>Not Done</td>
                       <td>View</td>
                   </tr>
                   <tr class="noBorder">
                       <td>2</td>
                       <td>Physics Assignment</td>
                       <td>11/03/21</td>
                       <td>15/03/21</td>
                       <td>Graded</td>
                       <td>View</td>
                   </tr>
                   <tr class="noBorder">
                       <td>3</td>
                       <td>English Assignment</td>
                       <td>11/03/21</td>
                       <td>15/03/21</td>
                       <td>Ungraded</td>
                       <td>View</td>
                   </tr>
                   <tr class="noBorder">
                       <td>4</td>
                       <td>Physics Assignment</td>
                       <td>11/03/21</td>
                       <td>15/03/21</td>
                       <td>Graded</td>
                       <td>View</td>
                   </tr>
                   <tr class="noBorder">
                       <td>5</td>
                       <td>English Assignment</td>
                       <td>11/03/21</td>
                       <td>15/03/21</td>
                       <td>Ungraded</td>
                       <td>View</td>
                   </tr>
                   
               </table>
            </span>
            <span className="table-line"></span>
            </div> 
            <span className="footer-a">All rights are reserved MindX 2021</span>
        </div>
    )
}

export default Assignment
