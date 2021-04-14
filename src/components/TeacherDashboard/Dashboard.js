import './Dashboard.css';
import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';

function Dashboard() {
  
    return (
        <div className="container">
            <section className="one">
              <div className="TeacherDashboard__heading_row">
                <div className="TeacherDashboard__title">Shortcuts</div>
                <div className="TeacherDashboard__line" />
              </div>
              <div>
                <Row>
                  {/* <Link to="/assignment" style={{textDecoration:"none", color:"white"}}><div className="Dashboard__button">My Assignments</div></Link> */}
                  <Col lg={3} md={6} sm={12} xs={12}>
                    <Link to="/teacher/classes">
                      <button>My Classes</button>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12}>
                    <button>Time Table</button>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12}>
                    <button>Notices</button>
                  </Col>
                  <Col lg={3} md={6} sm={12} xs={12}>
                    <button>My Profile</button>
                  </Col>
                
                </Row>
              </div>
            </section>
            <section className="two">
              <Row>
                <Col lg={4} md={5} sm={12} ><h3 className="TeacherDashboard__title">My Subjects</h3></Col>
                <Col lg={8} md={7}><div className="hrline"></div></Col>
              </Row>
            
              <div className="mySubject">
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <div  className="physics">
                      <img src={require('../../assets/images/physics 1.png').default}  alt="arrow"/>
                      <p>Physics</p>
                      <div className="horizon"></div>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <Link to="/test" >
                     <button>Test</button>
                    </Link> 
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <Link to="/teacher/assignments">
                      <button>Assignment</button>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <button>Notes</button>
                  </Col>
                </Row>
              </div>
            </section>
            <section className="three">
              <Row>
                <Col lg={4} md={5} sm={12}><h3 className="TeacherDashboard__title">Tests History</h3></Col>
                <Col lg={8} md={7}><div className="hrline"></div></Col>
              </Row>
             
              <div className="T_Dashboard__body">
                <div className="T_Dashboard__subject_header">
                    <div className="T_Dashboard__subject_1">S No.</div>
                    <div className="T_Dashboard__subject_2">Name</div>
                    <div className="T_Dashboard__subject_3">Date</div>
                    <div className="T_Dashboard__subject_4">Duration</div>
                    <div className="T_Dashboard__subject_5">Class Name</div>
                    <div className="T_Dashboard__subject_6">Action</div>
                </div>
                <div className="T_Dashboard__subject_body">
                    <div className="T_Dashboard__subject_1">1</div>
                    <div className="T_Dashboard__subject_2">Chapter 1</div>
                    <div className="T_Dashboard__subject_3">15/01/2021</div>
                    <div className="T_Dashboard__subject_4">1 hrs</div>
                    <div className="T_Dashboard__subject_5">12th A</div>
                    <div className="T_Dashboard__subject_5">View</div>
                </div>
               <div className="T_Dashboard__subject_body">
                    <div className="T_Dashboard__subject_1">2</div>
                    <div className="T_Dashboard__subject_2">Chapter 1</div>
                    <div className="T_Dashboard__subject_3">15/01/2021</div>
                    <div className="T_Dashboard__subject_4">1 hrs</div>
                    <div className="T_Dashboard__subject_5">12th A</div>
                    <div className="T_Dashboard__subject_5">View</div>
                </div>
                <div className="T_Dashboard__subject_body">
                    <div className="T_Dashboard__subject_1">3</div>
                    <div className="T_Dashboard__subject_2">Chapter 1</div>
                    <div className="T_Dashboard__subject_3">15/01/2021</div>
                    <div className="T_Dashboard__subject_4">1 hrs</div>
                    <div className="T_Dashboard__subject_5">12th A</div>
                    <div className="T_Dashboard__subject_5">View</div>
                </div>
                <div className="T_Dashboard__subject_body">
                    <div className="T_Dashboard__subject_1">4</div>
                    <div className="T_Dashboard__subject_2">Chapter 1</div>
                    <div className="T_Dashboard__subject_3">15/01/2021</div>
                    <div className="T_Dashboard__subject_4">1 hrs</div>
                    <div className="T_Dashboard__subject_5">12th A</div>
                    <div className="T_Dashboard__subject_5">View</div>
                </div>
               <div className="T_Dashboard__subject_footer">
                  <div className="T_Dashboard__Button_row">
                        <div className="T_Dashboard__Button">
                            Download 
                        </div>

                        <div className="T_Dashboard__Button">
                           View More
                        </div>
                   </div>
                </div>
               
                    
               
            </div> 
              
            </section>
        </div>
    )
}

export default Dashboard;
