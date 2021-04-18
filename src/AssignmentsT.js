import React, {useState, useEffect} from 'react';
import Back from './images/back-icon.png';
import "./AssignmentT.css"
import plus from "./images/plus-icon.png";
import {Link} from 'react-router-dom';
import Teacherpopup from './components/teacher/popup';
import app from './firebase';


function AssignmentsT({overview, assignment_id, userDetails, user}) {
    const [teacherPopupShow,setTeacherPopupShow] = useState(false);
    const [disabled_one, setDisabled_one] = useState(false);
    const [disabled_two, setDisabled_two] = useState(false);
    const [disabled_three, setDisabled_three] = useState(false);
    const [inputValue_one, setInputValue_one] = React.useState("");
    const [inputValue_two, setInputValue_two] = React.useState("");
    const [inputValue_three, setInputValue_three] = React.useState("");
    const [assignments, setAssignments] = useState([]);
    const [reloadAssignments, setReloadAssignments] = useState(0);
    const onChangeHandler_one = event => {
        setInputValue_one(event.target.value);
    };

     const onChangeHandler_two = event => {
        setInputValue_two(event.target.value);
    };

    const onChangeHandler_three = event => {
       setInputValue_three(event.target.value);
    };


    const handleKeypress_one = e => {
        var code = e.keyCode || e.which;
        if(code === 13) {
            setDisabled_one(true);
        } 
    };

    const handleKeypress_two = e => {
        var code = e.keyCode || e.which;
        if(code === 13) {
            setDisabled_two(true);
        } 
    };

    const handleKeypress_three = e => {
        var code = e.keyCode || e.which;
        if(code === 13) {
            setDisabled_three(true);
        } 
    };

    const getAssignments = () => {
        if(user!==null && user.uid!==undefined){
            app.firestore().collection("assignments").where("teacher_id", "==", user.uid)
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                    (doc)=>{
                        setAssignments(oldQuestion => [...oldQuestion, doc.data()])
                    }
                )
            })
            .catch(e=>console.log(e));
        }
    }
   useEffect(() => {
       getAssignments();
   }, [user, reloadAssignments])

   useEffect(() => {
       console.log(assignments);
   }, [assignments])
  
    return (
        <div>
             <div className="top-line"></div>
             <div className="head">
                <span className="back">
                    <Link to="/teacher/dashboard" style={{textDecoration: "none"}}>
                        <img className="back-icon" src={Back}></img>
                    </Link>                
                </span>
            <span className="title-a">My Assignments</span>
            <span className="line"></span>   
            </div>
            <span className="table-t"><span className="table-at">{overview?"Previous Assignments":assignment_id}</span></span>
            <span className="content">
            <span className="table-c">
           
            <table>
                   <tr class="noBorder deco">
                       <td className="teacher_assignments__th">S No.</td>
                       <td className="teacher_assignments__th">{overview?"Assignment Name":"Student Name"}</td>
                       <td className="teacher_assignments__th">Class</td>
                       {overview&&<td className="teacher_assignments__th">Submissions</td>}
                       <td className="teacher_assignments__th">Status</td>
                       {!overview&&<td className="teacher_assignments__th">Grade</td>}
                   </tr>

                   {assignments.map((assignment, index)=><tr class="noBorder">
                       <td>{index}</td>
                       <td>{assignment.name}</td>
                       <td>{assignment.class}</td>
                       {overview&&<td>{assignment.submissions?assignment.submissions:0}</td>}
                       <a href={assignment.url}><td>View</td></a>
                       {!overview&&<td className="grade_input"><input
                            type="text"
                            name="name"
                            onChange={onChangeHandler_one}
                            onKeyPress={handleKeypress_one}
                            value={inputValue_one}
                            disabled={disabled_one}
                        /></td>}
                   </tr>)}

                   </table>
            </span>
            <span className="table-line"></span>
            </span>
            <div className="bot">
            <span className="circle-add">
            <img className="plus" src={plus} onClick={()=>setTeacherPopupShow(true)}></img>    
            </span>    
            </div>
            <span className="footer-a">All rights are reserved MindX 2021</span>
             <div className="bottom-line"></div>   
             <Teacherpopup setReloadAssignments={setReloadAssignments} teacherPopupShow={teacherPopupShow} setTeacherPopupShow={setTeacherPopupShow} userDetails={userDetails} user={user}/>
        </div>
    )
}

AssignmentsT.defaultProps = {
    overview: true,
    assignment_id: NaN
}

export default AssignmentsT
