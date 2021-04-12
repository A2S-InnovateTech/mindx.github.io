import React, {useState}  from 'react';
import {  Button, Form, Col } from 'react-bootstrap';
import './profile.css';

const BodyinputLarge = (props) => {
    return(
        <Form.Group >
        <Form.Row>
        <Col  xs={9} md={2} sm={3} >
        <Form.Label className="formlabel">{props.label}</Form.Label>
        </Col>
        <Col   xs={9} md={10} sm={9}  >
        <Form.Control  className="forminput" type="text" placeholder={props.placeholder} disabled={props.disabled} onChange={(e) => props.set(e.target.value)} />
        </Col>
        </Form.Row>
        </Form.Group>
    );

}

const Bodyinputsmall = (props) => {
    return(
        <Form.Row>
        <Col  xs={4}  sm={3} md={2}>
        <Form.Label className="formlabel">Mobile&nbsp;Number</Form.Label>
        </Col>
        <Col  xs={5} sm={3} md={3}>
        <Form.Control className="forminput-mobile" placeholder={props.placeholderone} type="text" onChange={(e) => props.setnum(e.target.value)} disabled={props.disabled} />
        </Col>
        <Col  xs={4} sm={3} md={2}>
        <Form.Label className="formlabel-email">Email</Form.Label>
        </Col>
        <Col  xs={5} sm={3} md={5}> 
        <Form.Control  className="forminput-email" placeholder={props.placeholdertwo} type="email" onChange={(e) => props.setmail(e.target.value)} disabled={props.disabled} />
        </Col>
        </Form.Row>
    );

}

const Bodybutton = (props) => {
    return(
        <Form.Row>
            <Col  xs={10} md={9} sm={8} >
                <Form.Label className="personal__title">{props.buttontitle}</Form.Label>
            </Col>
            <Col  xs={4} md={2} sm={2}>
                <Button className="editbutton" onClick={props.editbutton} >Edit</Button>
            </Col>
            <Col  xs={4} md={1} sm={2}>
                <Button className="savebutton"  onClick={props.savebutton}>Save</Button>
            </Col>
        </Form.Row>
    );

}

export default BodyinputLarge;
export { Bodyinputsmall, Bodybutton };