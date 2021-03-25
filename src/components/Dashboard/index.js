import React from 'react';
import './Dashboard.css';
import Maths from './function.png';
import Physics from './physics.png';
import Chemistry from './chemistry.png';
import Computer from './computer.png';
import English from './english.png';
import Literature from './literature.png';
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">Shortcuts</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__button_row">
                <Link to="/assignment" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Assignments</div></Link>
                <div className="Dashboard__button">My Videos</div>
                <div className="Dashboard__button">My Notes</div>
                <Link to="/report" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Report</div></Link>
            </div>

            <div className="Dashboard__button_row">
                <Link to="/test" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">Take Assessment</div></Link>
                <div className="Dashboard__button">Time Table</div>
                <div className="Dashboard__button">My Notices</div>
                <div className="Dashboard__button">My Profile</div>
            </div>
            
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">My&nbsp;Subjects</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__button_row">
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'Maths' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >    
                <div className="Dashboard__subject">
                    <img src={Maths} alt="Maths" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">Maths</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'Physics' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >
                <div className="Dashboard__subject">
                    <img src={Physics} alt="Physics" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">Physics</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'Chemistry' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >
                <div className="Dashboard__subject">
                    <img src={Chemistry} alt="Chemistry" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">Chemistry</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'Computer' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >
                <div className="Dashboard__subject">
                    <img src={Computer} alt="Computer" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">Computer</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'English' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >
                <div className="Dashboard__subject">
                    <img src={English} alt="English" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">English</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
                <Link 
                    to={{
                        pathname:"/s",
                        state: { subject: 'Literature' }
                    }} 
                    style={{textDecoration:"none", color:"black"}}
                >
                <div className="Dashboard__subject">
                    <img src={Literature} alt="Literature" className="Dashboard__subject_img"/>
                    <div className="Dashboard__subject_name">Literature</div>
                    <div className="Dashboard__subject_line" />
                </div>
                </Link>
            </div>
            
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">Recent&nbsp;Tests</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__table">
                <table className="table">
                    <tr>
                        <th>S.No.</th>
                        <th>Student</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Marks Obtained</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td>15/01/2021</td>
                        <td>1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td>15/01/2021</td>
                        <td>1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td>15/01/2021</td>
                        <td>1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td>15/01/2021</td>
                        <td>1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
