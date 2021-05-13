import './Dashboard.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ShareIcon from './share.png';
import firebase from 'firebase';
import app from '../../../firebase';
import Loader from "react-loader-spinner";

function AdminDashboard({user, userDetails, setUserDetails, openFeedback, setOpenFeedback}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log(userDetails);
    }, [userDetails])

    useEffect(() => {
        if(userDetails?.school)
            app.firestore().collection("users")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                        (doc)=>{
                            setUsers(oldUsers => [...oldUsers, doc.data()])
                        }
                    )
            })
    }, [userDetails])

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        <div className="AdminDash">
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">Shortcuts</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__button_row justifyLeft">
                <Link to="/admin/feedback" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">Feedbacks</div></Link>
                <Link to="/admin/database" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Database</div></Link>
            </div>
            
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">Verify&nbsp;Accounts</div>
                <div className="Dashboard__line" />
            </div>

            <div className="AdminDashboard__button_column">
                <div className="Dashboard__button_row justifyLeft">
                    <Link to="/admin/verify/teacher" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">Teacher</div></Link>
                    <Link to="/admin/verify/class-teacher" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">Class Teacher</div></Link>
                    <Link to="/admin/verify/principal" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">Principal</div></Link>
                </div>
            </div>

            <div className="Dashboard__table">
                <table className="table admin">
                    <thead>
                    <tr>
                        <th style={{borderRadius: "10px 0px 0px 0px"}}>Name</th>
                        <th>Role</th>
                        <th >School</th>
                        <th className="hide_on_mobile">Date</th>
                        <th className="hide_on_mobile" style={{borderRadius: "0px 10px 0px 0px"}}>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td colspan="5">
                    <div className="scrollit">
                        <table>
                            <tbody>
                                {users?.map((item, index)=>(
                                    <tr className="inner">
                                        <td>{item.name?item.name:"User"}</td>
                                        <td>{item.userType?item.userType:"Role"}</td>
                                        <td>{item.school?item.school:"School"}</td>
                                        <td className="hide_on_mobile">29/04/2021</td>
                                        <td className="hide_on_mobile">11:30 A.M.</td>
                                    </tr>
                                ))
                                }
                                {
                                    (users.length===0||users===undefined)&&
                                        <div className="loader_center">
                                            <Loader
                                                type="ThreeDots"
                                                color="#00BFFF"
                                                height={50}
                                                width={50}
                                                timeout={3000} //3 secs
                                            />
                                        </div>
                                }
                           </tbody>
                        </table>
                    </div>
                    </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard;
