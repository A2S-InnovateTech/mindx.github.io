import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Database.css';
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';
import firebase from 'firebase';
import app from '../../../firebase';
import Loader from "react-loader-spinner";

function Database() {
    const [openIndex, setOpenIndex] = useState(0);
    const [searchString, setSearchString] = useState("");
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    useEffect(() => {
        getSchools();
    }, [])

    const getSchools = () => {
        setLoading(true);
        app.firestore().collection("schools")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                        (doc)=>{
                            setSchools(oldUsers => [...oldUsers, doc])
                        }
                    );
                setLoading(false);
            })
    }

    const searchSchools = (e) => {
        
    }

    return (
        <div className="Database">
            <div className="Dashboard__heading_row">
                <div className="arrow">
                    <Link to="/admin/dashboard"><img src={require('../../../assets/images/arrow.png').default}  alt="arrow" width="42px"/></Link>
                </div>
                <div className="Dashboard__title">My&nbsp;Database</div>
                <div className="Dashboard__line" />
            </div>

            <div className="Database__search_row">
                <input type="text" className="Database__search_input" placeholder="Enter School Name" value={searchString} onChange={(e)=>{setSearchString(e.target.value); searchSchools(e)}}/>
                <div className="Database__search_icon"><img src={require('./search.png').default}  alt="search" width="20px"/></div>
            </div>

            {/* <div className="Database__search_history">
                <div className="Database__search_history_title">Recent Search History</div>

                <div className="Database__search_history_body">
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                    <div className="Database__search_history_row">
                        <img src={require('./search.svg').default}  alt="search" width="16px"/>
                        <div className="Database__search_history_text">D.S.B.M. Sr. Sec. School</div>
                    </div>
                </div>
            </div> */}

            <div className="Database__search_results">
                <div className="Database__search_results_title">Search Results</div>
                <div className="Database__search_results_body">
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
                        schools.map((school, index)=>(
                            <>
                                <div className="Database__search_result_title" >            
                                    <div className="Class__title_class">{school.data().name}</div>
                                    {openIndex===index ? 
                                        <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpenIndex(-1)}}/>
                                        :
                                        <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpenIndex(index)}}/>
                                    }
                                </div>
                                {openIndex===index && <div className="Database__search_result_body">
                                    <div className="Database__search_result_class">Class 1st</div>
                                    <div className="Database__search_result_class">Class 2nd</div>
                                    <div className="Database__search_result_class">Class 3rd</div>
                                    <div className="Database__search_result_class">Class 4th</div>
                                    <div className="Database__search_result_class">Class 5th</div>
                                    <div className="Database__search_result_class">Class 6th</div>
                                    <div className="Database__search_result_class">Class 7th</div>
                                    <div className="Database__search_result_class">Class 8th</div>
                                    <div className="Database__search_result_class">Class 9th</div>
                                    <div className="Database__search_result_class">Class 10th</div>
                                    <div className="Database__search_result_class">Class 11th</div>
                                    <div className="Database__search_result_class">Class 12th</div>
                                    
                                </div>}
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Database;
