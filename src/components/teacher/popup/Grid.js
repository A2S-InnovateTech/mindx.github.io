import React, {useState}  from 'react';
import {  Button, Modal, Row, Col, Container} from 'react-bootstrap';
import './tpop.css';

const Grid =(props) => {
    return (
      <Modal 
        
       size="xl"  
      
        {...props} 
       dialogClassName="tpop modal-90w " 
       aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton className="tpop-header">
          <Modal.Title className="modal-title modal-title-text">
          Create Assignment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="tpopb">
          <Container>
            <Row>
              <Col xs={9} md={6}>
              <div className="rec-left">
              <div className="box"><div className="dog"></div></div>
              <div className="textbox"><p className="boxtext">Enter Assignment Name</p></div>
              </div>
              </Col>
              <Col xs={9} md={6}>
                <div  className="rec">
              <div className="box"><div className="upload"></div></div>
              <div className="textbox"><p className="boxtext">Upload Assignment</p></div>
              </div>
              </Col>
            </Row>
            
            <Row>
              <Col xs={9} md={6}>
              <div  className="rec-left">
              <div className="box"><div className="presentation"></div></div>
              <div className="textbox"><p className="boxtext">Select Class</p></div>
              <div className="poly"></div>
              </div>
              </Col>
              <Col xs={9} md={6}>
              <div  className="rec">
              <div className="box"><div className="calendar"></div></div>
              <div className="textbox"><p className="boxtext">Due Date</p></div>
              <div className="margincal">
              <div className="smallcalendar"></div>
              </div>
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