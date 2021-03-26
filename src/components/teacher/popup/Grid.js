import React, {useState}  from 'react';
import {  Button, Modal, Row, Col, Container} from 'react-bootstrap';
import './tpop.css';

import Dog from './dog.png'
import Calendar from './calendar.png';
import Presentation from './presentation.png';
import Upload from './upload.png';

const Grid =(props) => {
    return (
      <Modal 
       size="lg"  
       centered {...props} 
       dialogClassName="tpop" 
       aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton className="tpopb">
          <Modal.Title id="contained-modal-title-vcenter">
          Create Assignment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="tpopb">
          <Container>
            <Row>
              <Col xs={9} md={6}>
              <div className="rec">
              <div className="box"><div className="dog"></div></div>
              <p className="boxtext">Enter Assignment Name</p>
              </div>
              </Col>
              <Col xs={9} md={6}>
                <div  className="rec">
              <div className="box"><div className="upload"></div></div>
              <p className="boxtext">Upload Assignment</p>
              </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                g
              </Col>
              <Col xs={6} md={4}>
              
              </Col>
            </Row>
            <Row>
              <Col xs={9} md={6}>
              <div  className="rec">
              <div className="box"><div className="presentation"></div></div>
              <p className="boxtext">Select Class</p>
              <div className="poly"></div>
              </div>
              </Col>
              <Col xs={9} md={6}>
              <div  className="rec">
              <div className="box"><div className="calendar"></div></div>
              <p className="boxtext">Due Date</p>
              </div>
              </Col>
            </Row>
  
           
          </Container>
        </Modal.Body>
        <Modal.Footer  className="tpopb">
          <div className="creatbox">
              <p className="creat-text">Create & Post</p>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
  
 export default Grid;