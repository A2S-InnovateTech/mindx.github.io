import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Dashboardrow from './Dashboard';

import { Row, Col} from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {

        var state={
            persons:[
                {title : 'Class 12th A', teacher : 'Shivam Varshney',  strength : '35 Students'},
                {title : 'Class 12th B', teacher : 'Shivam Varshney',  strength : '35 Students'},
                {title : 'Class 11th A', teacher : 'Shivam Varshney',  strength : '35 Students'}
            ]
        }
 
        return (
           <div>
                <div className="PrincipalDashboard">
                        <div className="PrincipalDashboard__heading_row">
                            <div className="PrincipalDashboard__title">Shortcuts</div>
                            <div className="PrincipalDashboard__line" />
                        </div>
                        <div>
                            <Row>
                                <Col lg={3} md={6} sm={12} xs={12}>
                                    <button>All Classes</button>
                                    
                                </Col>
                                <Col lg={3} md={6} sm={12} xs={12}>
                                    <Link to="/principal/notice" style={{textDecoration:"none", color:"white"}}><button>Notices</button></Link>
                                </Col>
                                <Col lg={3} md={6} sm={12} xs={12}>
                                    <Link to="/principal/profile" style={{textDecoration:"none", color:"white"}}><button>My Profile</button></Link>
                                </Col>
                                <Col lg={3} md={6} sm={12} xs={12}>
                                </Col>
                            </Row>
                        </div>

                         <div className="PrincipalDashboard__heading_row">
                            <div className="PrincipalDashboard__title">All Classes</div>
                            <div className="PrincipalDashboard__line" />
                        </div>
                </div>
        
               {state.persons.map((item) => {
                return <>
                        <Dashboardrow className="PrincipalDashboard_all_class" title={item.title} teacher={item.teacher} strength={item.strength}/>
                    </>
                })}
        </div>
        );
    
}

export default Dashboard;