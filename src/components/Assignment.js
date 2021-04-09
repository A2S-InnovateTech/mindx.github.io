import React from 'react'
import Sidebar from './Sidebar/index'
import './Assignment.css'
import Back from '../images/back-icon.png';
import {Link} from 'react-router-dom';


function Assignment() {
    return (
        <div className="assignment">
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <div className="head">
            <span className="back">
            <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}><img className="back-icon" src={Back}></img></Link>
            </span>
            <span className="title-a">My Assignments</span>
            <span className="line"></span>   
            </div>
            <span className="table-t">
                <span className="t-1_Assignment">S No.</span>
                <span className="t-2_Assignment">Assignment Name</span>
                <span className="t-3">Date</span>
                <span className="t-4">Due Date</span>
                <span className="t-5_Assignment">Status</span>
                <span className="t-6">Action</span>
            </span>
            <div className="table-r">
            <span className="table-c">
               <table className="autoSerial">
                <tbody>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>English Assignment</td>
                       <td  className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Not Done</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'English' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >
                        <td>View</td>
                       </Link>
                   </tr>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>Physics Assignment</td>
                       <td className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Graded</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'Physics' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >    
                        <td>View</td>
                       </Link>
                   </tr>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>English Assignment</td>
                       <td className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Not Done</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'English' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >
                        <td>View</td>
                       </Link>
                   </tr>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>Physics Assignment</td>
                       <td className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Graded</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'Physics' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >    
                        <td>View</td>
                       </Link>
                   </tr>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>English Assignment</td>
                       <td className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Not Done</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'English' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >
                        <td>View</td>
                       </Link>
                   </tr>
                   <tr class="noBorder">
                       <td className="serial"></td>
                       <td>Physics Assignment</td>
                       <td className="hide_on_mobile">11/03/21</td>
                       <td className="hide_on_mobile">15/03/21</td>
                       <td>Graded</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'Physics' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >    
                        <td>View</td>
                       </Link>
                   </tr>
                   </tbody>
               </table>
            </span>
            <span className="table-line"></span>
            </div> 
            <span className="footer-a">All rights are reserved MindX 2021</span>
        </div>
    )
}

export default Assignment
