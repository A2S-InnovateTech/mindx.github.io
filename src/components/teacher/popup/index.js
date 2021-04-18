import React, {useState}  from 'react';
import {  Button} from 'react-bootstrap';
import Grid from './Grid';



const Teacherpopup = ({teacherPopupShow, setTeacherPopupShow, userDetails, user, setReloadAssignments}) =>  {
    return (
      <>
        <Grid show={teacherPopupShow} onHide={() => setTeacherPopupShow(false) } setReloadAssignments={setReloadAssignments} userDetails={userDetails} user={user}/>
      </>
    );
  }
  
  export default Teacherpopup;