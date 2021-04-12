import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import Maths from './function.png';
import Physics from './physics.png';
import Chemistry from './chemistry.png';
import Computer from './computer.png';
import English from './english.png';
import Literature from './literature.png';
import {Link} from "react-router-dom";
import app from '../../firebase';
import Modal from 'react-modal';
import Popup from '../popup';
import classSubject from '../../subjects';
import Feedback from '../Feedback';

function Dashboard({user, userDetails, setUserDetails, openFeedback, setOpenFeedback}) {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    useEffect(() => {
        console.log(userDetails?.assessmentTaken);
        if(userDetails?.assessmentTaken===false){
            setIsOpen(true);
        }
    }, [userDetails?.assessmentTaken]);

    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        var dd = String(t.getDate()).padStart(2, '0');
        var mm = String(t.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = t.getFullYear();

        var date = dd + '/' + mm + '/' + yyyy;

        return date;
    }

    return (
        <div className="Dashboard">
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">Shortcuts</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__button_row">
                <Link to="/report" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Report</div></Link>
                <div className="Dashboard__button">Time Table</div>
                <div className="Dashboard__button">My Notices</div>
                <Link to="/profile" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Profile</div></Link>
            </div>
            
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">My&nbsp;Subjects</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__button_row">
                {classSubject[userDetails.class.split(" ")[0]]?.map((item, i)=>(
                    <Link 
                        to={{
                            pathname:"/s",
                            state: { subject: item }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                        key={i}
                    >
                    <div className="Dashboard__subject">
                        <img src={Maths} alt={item} className="Dashboard__subject_img"/>
                        <div className="Dashboard__subject_name">{item}</div>
                        <div className="Dashboard__subject_line" />
                    </div>
                    </Link>
                ))}
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
                        <th className="hide_on_mobile">Date</th>
                        <th className="hide_on_mobile">Duration</th>
                        <th>Marks Obtained</th>
                        <th>Action</th>
                    </tr>
                    {userDetails?.test1!==null&&(
                        <tr>
                            <td>1</td>
                            <td>Assessment&nbsp;1</td>
                            <td className="hide_on_mobile">{toDateTime(userDetails?.timestamp.seconds)}</td>
                            <td className="hide_on_mobile">10 mins</td>
                            <td>{userDetails?.test1}/15</td>
                            <td>View</td>
                        </tr>
                    )}
                    {userDetails?.test1!==null&&(
                        <tr>
                            <td>2</td>
                            <td>Assessment&nbsp;2</td>
                            <td className="hide_on_mobile">{toDateTime(userDetails?.timestamp.seconds)}</td>
                            <td className="hide_on_mobile">10 mins</td>
                            <td>{userDetails?.test2}/15</td>
                            <td>View</td>
                        </tr>
                    )}
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td className="hide_on_mobile">15/01/2021</td>
                        <td className="hide_on_mobile">1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Physics</td>
                        <td className="hide_on_mobile">15/01/2021</td>
                        <td className="hide_on_mobile">1 hrs</td>
                        <td>38/50</td>
                        <td>View</td>
                    </tr>
                </table>
            </div>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={()=>setIsOpen(false)}
                    contentLabel="Example Modal"
                    >
                        <Popup setIsOpen={setIsOpen}/>
                    </Modal>
                {openFeedback&&<Feedback setOpenFeedback={setOpenFeedback}/>}
        </div>
    )
}

export default Dashboard
