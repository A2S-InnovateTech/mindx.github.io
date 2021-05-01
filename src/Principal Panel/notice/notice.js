import React, {useState}  from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';

import './notice.css';

const Noticerow = (props) => {

    const [bodyOpen, setBodyOpen] = useState(false);

    return(
        <>
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
                    {bodyOpen ? 
                        <img src={ArrowUp} alt="Arrow Up" className="notice_icon_box" onClick={()=>{setBodyOpen(false)}}/>
                        :
                        <img src={ArrowDown} alt="Arrow Down" className="notice_icon_box" onClick={()=>{setBodyOpen(true)}}/>
                    }
                </Col>
            </Form.Row>
            
            </Container>
        </div>
        {bodyOpen && <div className="Notice__body">{props.body}</div>}
        </>
    );
}

export default Noticerow;