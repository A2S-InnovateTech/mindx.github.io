import React from 'react'
import './Sidebar.css';
import Logo from '../../logo.png';
import ProfilePic from './profile_pic.png';

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src={Logo} alt="MindX Logo" className="Sidebar__logo"/>
            <img src={ProfilePic} alt="Profile Pic" className="Sidebar__profile_pic"/>
            <p className="Sidebar__name">Shivam Varshney</p>
            <p className="Sidebar__school">D.S.B.M Sr. Sec. School</p>
            <p className="Sidebar__class">Class 12th A</p>

            <div className="Sidebar__buttons">
                <div className="Sidebar__button active">Dashboard</div>
                <div className="Sidebar__button">Timetable</div>
                <div className="Sidebar__button">Tests</div>
                <div className="Sidebar__button">Attendance</div>
                <div className="Sidebar__button">Help</div>
                <div className="Sidebar__button">Feedback</div>
                <div className="Sidebar__button">Settings</div>
            </div>
        </div>
    )
}

export default Sidebar
