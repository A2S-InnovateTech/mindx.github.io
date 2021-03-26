import React, {useState}  from 'react';
import {  Button} from 'react-bootstrap';
import Grid from './Grid';



const Teacherpopup = () =>  {
    const [modalShow, setModalShow] = useState(true);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          teacher panel popup
        </Button>
  
        <Grid show={modalShow} onHide={() => setModalShow(false) } />
      </>
    );
  }
  
  export default Teacherpopup;