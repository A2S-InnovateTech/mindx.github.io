import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import app from '../../../firebase';
import './Verify.css';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";

Moment.globalFormat = 'DD/MM/YYYY';

function Verify({type, user, userDetails}) {
    const [users, setUsers] = useState([]);
    const [length, setLength] = useState(0);
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
                            setUsers(oldUsers => [...oldUsers, doc])
                        }
                    )
            })
    }, [userDetails])

    useEffect(() => {
        console.log(users);
    }, [users])

    const verifyUser = (id, e) =>{
        app.firestore().collection("users").doc(id).update({verified: true})
        .then(()=>{console.log("Verified user ", id); e.target.textContent="Verified"})
        .catch(e=>console.log("Error in verifying user: ", e))
    }

    return (
        <div className="Verify">
            <div className="Dashboard__heading_row">
                <div className="arrow">
                    <Link to="/admin/dashboard"><img src={require('../../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
                </div>
                <div className="Dashboard__title">{type=="teacher"?"Teacher": type=="principal"?"Principal":type=="class-teacher"?"Class\u00A0Teacher":""}&nbsp;Verify</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Dashboard__table">
                <table className="table admin">
                    <thead>
                    <tr>
                        <th style={{borderRadius: "10px 0px 0px 0px"}}>Name</th>
                        <th >School</th>
                        <th className="hide_on_mobile">Date</th>
                        <th style={{borderRadius: "0px 10px 0px 0px"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td colspan="5">
                    <div className="scrollit fullpage">
                        <table>
                            <tbody>
                                {users?.map((item, index)=>{
                                    if(item.data().userType==type&&(item.data().verified===undefined||item.data().verified===false)){
                                        return(
                                            <tr className="inner">
                                                <td>{item.data().name?item.data().name:"User"}</td>
                                                <td>{item.data().school?item.data().school:"School"}</td>
                                                <td className="hide_on_mobile">{item.data().timestamp.seconds?<Moment unix>{item.data().timestamp.seconds}</Moment>:""}</td>
                                                <td onClick={(e)=>verifyUser(item.id, e)} style={{cursor: "pointer"}}>Verify</td>
                                            </tr>
                                        )}
                                })
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

export default Verify
