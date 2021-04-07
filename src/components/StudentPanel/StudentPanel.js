import './StudentPanel.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import classSubject from '../../subjects';
import { Row, Col } from 'react-bootstrap';

function StudentPanel({props, userDetails}) {
  const [selectedSubject, setSelectedSubject] = useState(props?.subject || "Physics");
  var studentclass = userDetails.class.split(" ")[0];
  console.log(props);
    return (
       <div className="container">
           
    
        <div className="Dashboard__heading_row">
          <div className="arrow">
            <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
          </div>
          <div className="Dashboard__title">My&nbsp;Subjects</div>
          <div className="Dashboard__line" />
        </div>

         <section className="subjects_dropdown">
            <select className="browser-default" onChange={(e)=>setSelectedSubject(e.target.value)}>
              {classSubject[studentclass].map((item, i)=>(
                <option value={item} selected={props?.subject===item}>{item}</option>
              ))}
           </select>
         </section>

         <section>
           <h3>Subject : {selectedSubject}</h3>
           <Row >
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