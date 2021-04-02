import React, {useState}  from 'react';
import {  Button, Modal} from 'react-bootstrap';
import './pop.css';
import {Link} from "react-router-dom";

const Popup = ({setIsOpen}) =>  {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Modal
          size="lg"
          show={show}
          style={{fontSize:"15px"}}
          onHide={() => setIsOpen(false)}
          dialogClassName="pop"
          aria-labelledby="example-custom-modal-styling-title" >
          <Modal.Header closeButton  className="popback">
            <Modal.Title className="title">
              <p >Welcome&nbsp;new&nbsp;User</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="popback">
            <p  className="p1">
            As a new user we first evaluate you using a small test
            </p>
            <p className="p1">
            This test help us to find your weakness & strengths and design our A.I. based practice section as per your profile
You can click on Practice Now button incase you want to practice some questions before giving the test
            </p>
          </Modal.Body>
          <Modal.Footer className="popback-f">
          <Link to="/test" to={{
                            pathname:"/test",
                            state: { testNo: 1 }
                        }} style={{textDecoration:"none", color:"white"}}>
          <div className="buttonone">
            <div className="iconone"></div>
           <p className="button-onetext"> Practice Now</p>
          </div>
          </Link>
          <Link to="/test" to={{
                            pathname:"/test",
                            state: { testNo: 1 }
                        }} style={{textDecoration:"none", color:"white"}}>
          <div className="buttontwo">
          <div className="icontwo"></div>
           <p className="button-twotext">Take a Test</p>
          </div>
          </Link>
          
        </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Popup;