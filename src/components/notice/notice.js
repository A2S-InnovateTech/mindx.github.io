import React, {useState}  from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';

import './notice.css';

const Noticerow = (props) => {

    

    return(
        <div className="notice_rec" >
            <Container fluid>
            <Form.Row className="notice_row">
                <Col  xs={4} md={8} sm={6} >
                    <Form.Label ><p className="notice_text">{props.title}</p></Form.Label>
                </Col>
                <Col  xs={4} md={3} sm={5}>
                    <Form.Label><p className="notice_texttime">{props.time}</p></Form.Label>
                </Col>
                
                <Col  xs={4} md={1} sm={1}>
                    <div className="notice_icon_box"><div className="notice_icon"></div></div>
                </Col>
            </Form.Row>
            </Container>
            
            
        </div>
    );
}

export default Noticerow;