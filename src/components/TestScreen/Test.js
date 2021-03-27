import './Test.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';

function Test() {
    return (
        <div className="container">
            
            <section className="first">
              <div className="slider">
                <img src={require('../../assets/images/Ellipse 18.png').default}  alt="ellipse" className="ellipse"/>
                <img src={require('../../assets/images/Rectangle 119.png').default}  alt="rect" style={{marginLeft:"-5px"}} className="rect"/>
                
                <img src={require('../../assets/images/Rectangle 119 (1).png').default}  alt="rect" style={{marginRight:"-5px"}} className="rect"/>
                <img src={require('../../assets/images/Ellipse 18 (1).png').default}  alt="ellipse" className="ellipse"/>
              </div>
              <div className="cross">
                <img src={require('../../assets/images/cross-sign (1) 1.png').default}  alt="rect" />
              </div>
            </section>
            <h3>Practice Now</h3>
            <section className="questag">
              
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
               
            </section>
            <section>
              <div className="test_header">
                <div className="quesnum">Question No : 1 of 15 </div>
                <div className="time">Time Left : 09 m 37 s</div>
              </div>
              <div className="ques">Q1. What is the S.I. unit of magnetic field ? </div>
              <Row className="options">
                <Col lg={5} md={5} sm={12} className="opt">
                  <span>A</span>
                  <p>Tesla</p>
                </Col>
                <Col lg={5} md={5} sm={12} className="opt">
                  <span>B</span>
                  <p>Volts</p>
                </Col>
                <Col lg={5} md={5} sm={12} className="opt">
                  <span>C</span>
                  <p>Meter</p>
                </Col>
                <Col lg={5} md={5} sm={12} className="opt">
                  <span>D</span>
                  <p>Ohms</p>
                </Col>
              </Row>
            </section>
            
            <section className="btns">
              <button className="pre">Previous</button>
              <button className="next">Next</button>
              <button className="submit">Submit</button>
            </section>
        </div>
    )
}

export default Test;
