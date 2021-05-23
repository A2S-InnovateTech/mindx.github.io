import './Classes.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';
import firebase from 'firebase';
import app from '../../../firebase';
import Loader from "react-loader-spinner";

function Classes({props, user, userDetails}) {
    const [openIndex, setOpenIndex] = useState(1);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = () => {
        setLoading(true);
        app.firestore().collection("users")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                        (doc)=>{
                            if(doc.data().userType==="student" && doc.data().school===props.school && doc.data().class==1)
                                setUsers(oldUsers => [...oldUsers, doc])
                            if(doc.data().section && sections.includes(doc.data().section))
                                setSections(oldSection => [...oldSection, doc.data().section])
                        }
                    );
                setLoading(false);
            })
    }

    if (props)
    return (
        <div className="Classes">
            <div className="Dashboard__heading_row">
                <div className="arrow">
                    <Link to="/admin/database"><img src={require('../../../assets/images/arrow.png').default}  alt="arrow" width="42px"/></Link>
                </div>
                <div className="Dashboard__title">The&nbsp;Classes</div>
                <div className="Dashboard__line" />
            </div>
            <div className="Classes__body">
                <div className="Classes__school_name">{props.school.name}</div>
                
                <div className="Classes__column">
                    <div className="Classes__class_header">Class {props.class}{props.class===1?'st':props.class===2?'nd':props.class===3?'rd':'th'}</div>
                    <div className="Classes__class_body">
                        {loading&&<div className="loader_center">
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height={50}
                                width={50}
                                timeout={3000} //3 secs
                            />
                        </div>}
                        {
                            sections.map((section, index)=>(
                            <>
                                <div className="Classes__section_header">
                                    <div className="Classes__section_header_internal">Section: {section}</div>
                                    {/* <div className="Classes__section_header_internal hide_on_mobile" style={{marginLeft: "-20vw"}}>Strength: 35 Students</div> */}
                                    {openIndex===1 ? 
                                        <img src={ArrowUp} alt="Arrow Up" className="Arrow_img Classes__section_header_toggle" onClick={()=>{setOpenIndex(-1)}}/>
                                        :
                                        <img src={ArrowDown} alt="Arrow Down" className="Arrow_img Classes__section_header_toggle" onClick={()=>{setOpenIndex(1)}}/>
                                    }
                                </div>
                                {openIndex===1 && <div className="Classes__section_body">
                                    <div className="Classes__teacher_column">
                                        <div className="Classes__teacher_row">Class Teacher :&nbsp;&nbsp;&nbsp;&nbsp;Amit Jain</div>
                                    </div>
                                    <div className="Classes__table_header">
                                        <div className="Classes__table_row_roll">R.No.</div>
                                        <div className="Classes__table_row_name">Student&nbsp;Name</div>
                                        <div className="Classes__table_row_details">Details</div>
                                    </div>
                                    <div className="Classes__table_body">
                                    {
                                        users.map((user, index)=>(
                                            <div className="Classes__table_row">
                                                <div className="Classes__table_row_roll">1</div>
                                                <div className="Classes__table_row_name">Aakash Verma</div>
                                                <div className="Classes__table_row_details">View</div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>}
                            </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classes
