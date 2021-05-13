import './ViewFeedback.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import app from '../../../firebase';
import Loader from "react-loader-spinner";

function ViewFeedback({userDetails}) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        if(userDetails)
            app.firestore().collection("feedbacks")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                        (doc)=>{
                            setFeedback(oldFeedback => [...oldFeedback, doc.data()])
                        }
                    )
            })
    }, [userDetails])
    return (
        <div className="ViewFeedback">
          <div className="Dashboard__heading_row">
            <div className="arrow">
                <Link to="/admin/dashboard"><img src={require('../../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
            </div>
            <div className="Dashboard__title">Feedback</div>
            <div className="Dashboard__line" />
          </div>
                    <div className="Dashboard__table">
                <table className="table admin">
                    <thead>
                    <tr>
                        <th style={{borderRadius: "10px 0px 0px 0px"}}>Name</th>
                        <th>Role</th>
                        <th className="hide_on_mobile">School</th>
                        <th>Feedback</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td colspan="5">
                    <div className="scrollit full_height">
                        <table>
                            <tbody>
                                {feedback?.map((item, index)=>(
                                    <tr className="inner">
                                        <td>{item.name?item.name:"User"}</td>
                                        <td>{item.role?item.role:"Role"}</td>
                                        <td className="hide_on_mobile">{item.school?item.school:"School"}</td>
                                        <td>{item.feedback?item.feedback:"Feedback"}/10</td>
                                    </tr>
                                ))
                                }
                                {
                                    (feedback.length===0||feedback===undefined)&&
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

export default ViewFeedback;