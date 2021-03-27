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
                    <span className="buttonrow">
                        <label className="personal__title">Personal Information</label>
                    <Button className="savebutton" onClick={() => { alert('clicked') }} >save</Button>
                    <Button className="editbutton"  onClick={() => editp()}>Edit </Button>
                    
                    </span>
        <div>
        <Form className="form">
            <Form.Group >
                <Form.Row>
                    <Col  xs={3} md={2}>
                    <Form.Label className="formlabel">Student Name</Form.Label>
                    </Col>
                    <Col   xs={15} md={10}>
                    <Form.Control  className="forminput" type="text" placeholder="Student Name" disabled={disabled} />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group >
                <Form.Row>
                    <Col  xs={3} md={2}>
                    <Form.Label className="formlabel">Home Address</Form.Label>
                    </Col>
                    <Col   xs={15} md={10}>
                    <Form.Control className="forminput" type="text" placeholder="Home Address"  disabled={disabled}/>
                    </Col>
                </Form.Row>
            </Form.Group>
           
            <Form.Row>
                <Col  xs={3} md={2}>
                <Form.Label className="formlabel">Mobile Number</Form.Label>
                </Col>
                <Col  xs={5} md={3}>
                <Form.Control className="forminput" placeholder="Mobile Number" type="text" disabled={disabled} />
                </Col>
                <Col  xs={3} md={2}>
                <Form.Label className="formlabel">Email</Form.Label>
                </Col>
                <Col  xs={7} md={5}> 
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
            <Form.Group >
                <Form.Row>
                    <Col  xs={3} md={2}>
                    <Form.Label className="formlabel">School Name</Form.Label>
                    </Col>
                    <Col   xs={15} md={10}>
                    <Form.Control className="forminput" type="text" placeholder="Student Name" disabled={disableds} />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group >
                <Form.Row>
                    <Col  xs={3} md={2}>
                    <Form.Label className="formlabel">School Address</Form.Label>
                    </Col>
                    <Col   xs={12} md={8}>
                    <Form.Control className="forminput" type="text" placeholder="School Address"  disabled={disableds}/>
                    </Col>
                    <Col  xs={3} md={2}></Col>
                </Form.Row>
            </Form.Group>
           
            <Form.Row>
                <Col  xs={3} md={2}>
                <Form.Label className="formlabel">Mobile Number</Form.Label>
                </Col>
                <Col  xs={5} md={3}>
                <Form.Control className="forminput" placeholder="Mobile Number" type="text" disabled={disableds} />
                </Col>
                <Col  xs={3} md={2}>
                <Form.Label className="formlabel">Email</Form.Label>
                </Col>
                <Col  xs={7} md={5}> 
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