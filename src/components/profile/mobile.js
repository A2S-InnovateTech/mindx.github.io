import React, {useState}  from 'react';
import {  Button, Form, Col } from 'react-bootstrap';
import './mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mobile = () => {

    const [disabled, setDisabled] = useState(true);
    const [disableds, setDisableds] = useState(true);
    const [pname, setPname] = useState("");
    const [paddress, setPaddress] = useState("");
    const [pemail, setPemail] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [sname, setSname] = useState("");
    const [saddress, setSaddress] = useState("");
    const [semail, setSemail] = useState("");
    const [snumber, setSnumber] = useState("");
     const  editp = () => {
        setDisabled(false);
        alert(' edit clicked');
        console.log({pemail});
     }
     const  edits = () => {
        setDisableds(false);
        alert(' edit clicked');
     }

    return(



        <div >

            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">My&nbsp;Profile</div>
                <div className="Dashboard__line" />
            </div>

            <div className="formback">
              <div className="personalback">
                    <div className="personal">Personal Information</div>
                    </div>
                    <span><label className="personal__title">Personal Information</label>
                    <Button className="savebutton" onClick={() => { alert('clicked') }} >save</Button>
                    <Button className="editbutton"  onClick={() => editp()}>Edit </Button>
                    
                    </span>
        <div>
        <Form className="form">
            <Form.Group controlId="formGroupEmail">
                    <Form.Label className="formlabel">Student Name</Form.Label>
                    <Form.Control className="forminput" type="text" placeholder="Student Name" disabled={disabled} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label className="formlabel">Home Address</Form.Label>
                <Form.Control className="forminput" type="text" placeholder="Home Address"  disabled={disabled}/>
            </Form.Group>
            <Form.Row>
                <Col>
                <Form.Label className="formlabel">Mobile Number</Form.Label>
                <Form.Control className="forminput" placeholder="Mobile Number" type="text" disabled={disabled} />
                </Col>
                <Col>
                <Form.Label className="formlabel">Email</Form.Label>
                <Form.Control  className="forminput"placeholder="Email" type="email" disabled={disabled}  onChange={(event) => setPemail(event.target.value)}/>
                </Col>
            </Form.Row>
        </Form>
        </div>
        </div>
        <div className="gape"></div>
        <div className="formback">
              <div className="personalback">
                    <div className="personal">College/School Information</div>
                    </div>
                    <span><label className="personal__title">School Information</label>
                    <Button className="savebutton" onClick={() => { alert('clicked') }} >save</Button>
                    <Button className="editbutton"  onClick={() => edits()}>Edit </Button>
                    
                    </span>
        <div>
        <Form className="form">
            <Form.Group controlId="formGroupEmail">
                    <Form.Label className="formlabel">School Name</Form.Label>
                    <Form.Control className="forminput" type="text" placeholder="Student Name" disabled={disableds} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label className="formlabel">School Address</Form.Label>
                <Form.Control className="forminput" type="text" placeholder="Home Address"  disabled={disableds}/>
            </Form.Group>
            <Form.Row>
                <Col>
                <Form.Label className="formlabel">Mobile Number</Form.Label>
                <Form.Control className="forminput" placeholder="Mobile Number" type="text" disabled={disableds} />
                </Col>
                <Col>
                <Form.Label className="formlabel">Email</Form.Label>
                <Form.Control  className="forminput"placeholder="Email" type="email" disabled={disableds} />
                </Col>
            </Form.Row>
        </Form>
        </div>
        </div>


        </div>
    );
}

export default Mobile