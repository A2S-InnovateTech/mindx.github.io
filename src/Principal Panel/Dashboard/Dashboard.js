import './Dashboard.css';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';
import './Dashboard.css';


const Dashboardrow = (props) => {

  const [bodyOpen, setBodyOpen] = useState(false);
  
    return (
        <>
            
            <div className="PrincipalDashboard_rec" >
                <Container fluid>
                  <Form.Row className="PrincipalDashboard_row">
                      <Col  xs={4} md={8} sm={6} >
                          <Form.Label ><p className="PrincipalDashboard_text">{props.title}</p></Form.Label>
                      </Col>
                      
                      <Col  xs={4} md={1} sm={1}>
                          {/* <div className="PrincipalDashboard_icon_box" onClick={()=>setBodyOpen(!bodyOpen)}><div className="PrincipalDashboard_icon"></div></div> */}
                          {bodyOpen ? 
                              <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setBodyOpen(false)}}/>
                              :
                              <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setBodyOpen(true)}}/>
                          }
                      </Col>
                  </Form.Row>
                
                </Container>
             </div>

              {bodyOpen && <div className="PrincipalDashboard__body">
                <Row>
                  <Col xs={12} md={6} sm={6} lg={6}>
                    <div className="PrincipalDashboard_class_teacher">Class Tecaher  :  {props.teacher}</div>
                    <div className="PrincipalDashboard_class_strength">Class Strength  :  {props.strength}</div>
                  </Col>
                  <Col xs={12} md={6} sm={6} lg={6}>
                    <Link to="/principal/class-details">
                      <div className="PrincipalDashboard_view_detail" >Views Details</div>
                    </Link>
                    
                  </Col>
                </Row>
              </div>}
      </>
    )
}

export default Dashboardrow;
