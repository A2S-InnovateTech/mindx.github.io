import React, {useState, useEffect}  from 'react';
import {  Button, Modal, Row, Col, Container} from 'react-bootstrap';
import './tpop.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import firebase from 'firebase';
import app from '../../../firebase';

const Grid =(props) => {
  const [enterName, setEnterName] = useState(false);
  const [name, setName] = useState("");
  const [enterClass, setEnterClass] = useState(false);
  const [Class, setClass] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [assignment, setAssignment] = useState(null);

  const handleChange = (files) => {
        if (files[0]) {
            console.log(files[0]);
            setAssignment(files[0]);
        }
    };
  Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
          ].join('');
  };

  Date.prototype.ddmmyy = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [(dd>9 ? '' : '0') + dd,
            (mm>9 ? '' : '0') + mm,
            this.getFullYear()
          ].join('/');
  };

    useEffect(() => {
      console.log(props);
    }, [props.user])

    const postAssignment = () =>{
      if(name==""){
        alert("Please Enter Assignment Name");
        return;
      }
      else if(Class==0){
        alert("Please Enter Assignment Class");
        return;
      }
      else if(assignment==null){
        alert("Please upload Assignment");
        return;
      }

      const uploadTask = firebase.storage().ref(`assignments/teacher_${props.user.uid}/class_${Class}/${name}_${startDate.yyyymmdd()}`).put(assignment)
      .then((snapshot) => {
        if(props.userDetails.school===undefined || props.userDetails.school==null){
          alert("Please set your school before uploading assignments!");
          return;
        }

        snapshot.ref.getDownloadURL()
          .then(url=>{
            app.firestore().collection("assignments").add(
            {
              name: name,
              class: Class,
              school: props.userDetails.school,
              url: url,
              teacher_id: props.user.uid,
              date: startDate.ddmmyy()
            }
          ).then(()=>{
            props.onHide();
            window.location.reload(false);
          })
          })
        })
        
        console.log("Uploaded");
        
    }

    return (
      <Modal 
        size="xl"  
        {...props} 
       dialogClassName="tpop modal-90w " 
       aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header  className="tpop-header ">
          <Modal.Title className="modal-title modal-title-text">
          Create Assignment 
          
          </Modal.Title>
         <div className="crossbox"> <div className="cross"></div></div>
        </Modal.Header>
        <Modal.Body className="tpopb">
          <Container>
            <Row>
              <Col xs={9} md={6}>
              <div className="rec">
              <div className="box"><div className="dog"></div></div>
              {enterName?<input type="text" style={{width: "142px", backgroundColor:"#FFF5D1"}} placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>:<p className="boxtext" onClick={()=>setEnterName(true)}>Enter Assignment Name</p>}
              </div>
              </Col>
              <Col xs={9} md={6}>
                <div  className="rec">
              <div className="box"><div className="upload"></div></div>
              <input type="file" id="assignment__file" style={{display: "none"}} onChange={(e)=>handleChange(e.target.files)}/>
                <label for="assignment__file" className="file-trigger boxtext" >Upload Assignment</label>
              </div>
              </Col>
            </Row>
            
            <Row>
              <Col xs={9} md={6}>
              <div  className="rec">
              <div className="box"><div className="presentation"></div></div>
              <div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                <p className="boxtext" >Select Class</p>
                <input type="number" min="1" max="12" value={Class} style={{ backgroundColor:"#FFF5D1"}}onChange={(e)=>setClass(e.target.value)}/>
              </div>
              </div>
              </Col>
              <Col xs={9} md={6}>
              <div  className="rec">
              <div className="box"><div className="calendar"></div></div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <p className="boxtext" style={{width:"135px"}}>Due Date</p>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              </div>
              </div>
              </Col>
            </Row>
  
           
          </Container>
        </Modal.Body>
        <Modal.Footer  className="tpopb">
          <div className="creatbox">
              <p className="creat-text" onClick={()=>postAssignment()}>Create & Post</p>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
  
 export default Grid;