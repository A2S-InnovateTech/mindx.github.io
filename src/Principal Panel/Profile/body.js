import React   from 'react';
import {  Form } from 'react-bootstrap';
import BodyinputLarge from './bodyinputlarge';
import { Bodyinputsmall, Bodybutton } from './bodyinputlarge';
import './profile.css';

const Body = (props) => {
    return(
        <div className="form-body">

        <div className="personalback">
        <div className="personal">{props.heading}</div>
        </div>
        
       <Bodybutton
            buttontitle = {props.buttontitle}
            editbutton = {props.toggleeditbutton}
            savebutton = {props.savebutton}
       />
        
        <Form>
        <BodyinputLarge
            label = {props.labelone}
            placeholder = {props.Name}
            disabled = {props.editbutton}
            set = {props.setName}
        />
        <BodyinputLarge
            label = { props.labeltwo}
            placeholder = {props.Adress}
            disabled = {props.editbutton}
            set = {props.setAdress}
        />
        <Bodyinputsmall
            disabled = {props.editbutton}
            placeholderone = {props.Number}
            placeholdertwo = {props.Email}
            setnum = {props.setNumber}
            setmail = {props.setEmail}
        />
        
        </Form>
        </div> 
    );
}

export default Body


