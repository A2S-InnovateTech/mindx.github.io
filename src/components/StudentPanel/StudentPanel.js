import './StudentPanel.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

import { Row, Col } from 'react-bootstrap';

function StudentPanel() {
    return (
       <div className="container">
           
         <section className="header">
           <Row>
             <Col lg={1} md={1} sm={2} xs={2}>
               <div className="arrow">
                  <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow"/></Link>
               </div>
              </Col>
              <Col lg={3} md={4} sm={5} xs={7}>
               <p>My Subjects</p>
             </Col>
             <Col lg={8} md={7} sm={5} xs={3}>
               <div className="horizon"></div>
             </Col>
           </Row>
        </section>

         <section className="dropdown">
            <select className="browser-default" defaultValue="Physics">
                <option value="Physics">Physics</option>
                <option value="one">Option one</option>
                <option value="two">Option two</option>
                <option value="three">Option three</option>
           </select>
         </section>

         <section>
           <h3>Subject : Physics</h3>
           <Row>
               <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/notes.png').default}  alt="notes"/>
                  </div>
                  <p>My Notes</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/slides.png').default}  alt="slides"/>
                  </div>
                  <p>My Slides</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/video.png').default}  alt="videos"/>
                  </div>
                  <p>My Videos</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/exam.png').default}  alt="tests"/>
                  </div>
                  <p>My Tests</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/notes.png').default}  alt="assignments"/>
                  </div>
                  <p>Assignments</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
                <div className="comp">
                  <div className="image">
                    <img src={require('../../assets/images/practise.png').default}  alt="practise"/>
                  </div>
                  <p>Practise Now</p>
                </div>
              </Col>
           </Row>
          
         </section>

       </div>
    )
}

export default StudentPanel;