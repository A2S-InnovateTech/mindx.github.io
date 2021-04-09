import React, {useState}  from 'react';
import {  Button, Form, Col } from 'react-bootstrap';

import './notice.css';

const Noticerow = (props) => {

    

    return(
        <div className="notice_rec">
            <Form.Row >
                <Col  xs={6} md={4} sm={4} >
                    <Form.Label ><p className="notice_text">{props.title}</p></Form.Label>
                </Col>
                <Col  xs={6} md={4} sm={4}>
                    <Form.Label><p className="notice_text">{props.time}</p></Form.Label>
                </Col>
                
                <Col  xs={6} md={4} sm={4}>
                    <div className="notice_icon_box"><div className="notice_icon"></div></div>
                </Col>
            </Form.Row>
            
        </div>
    );
}

export default Noticerow;