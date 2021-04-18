import React, {useState} from 'react';
import Back from './images/back-icon.png';
import "./AssignmentT.css"
import plus from "./images/plus-icon.png";
import {Link} from 'react-router-dom';




function AssignmentsT() {

    const [disabled_one, setDisabled_one] = useState(false);
    const [disabled_two, setDisabled_two] = useState(false);
    const [disabled_three, setDisabled_three] = useState(false);
    const [inputValue_one, setInputValue_one] = React.useState("");
    const [inputValue_two, setInputValue_two] = React.useState("");
    const [inputValue_three, setInputValue_three] = React.useState("");

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
            <span className="table-t"><span className="table-at">Previous Assignments</span></span>
            <span className="content">
            <span className="table-c">
           
            <table>
                   <tr class="noBorder deco">
                       <td>S No.</td>
                       <td>Assignment Name</td>
                       <td>Class</td>
                       <td>Submissions</td>
                       <td>Status</td>
                       <td>Grade</td>
                   </tr>

                   <tr class="noBorder">
                       <td>1</td>
                       <td>Assignment 2</td>
                       <td>11th A</td>
                       <td>43/50</td>
                       <td>View</td>
                       <td className="grade_input"><input
                            type="text"
                            name="name"
                            onChange={onChangeHandler_one}
                            onKeyPress={handleKeypress_one}
                            value={inputValue_one}
                            disabled={disabled_one}
                        /></td>
                   </tr>

                   <tr class="noBorder">
                       <td>2</td>
                       <td>Assignment 2</td>
                       <td>11th B</td>
                       <td>23/50</td>
                       <td>View</td>
                       <td className="grade_input"><input
                            type="text"
                            name="name"
                            onChange={onChangeHandler_two}
                            onKeyPress={handleKeypress_two}
                            value={inputValue_two}
                            disabled={disabled_two}
                       /></td>
                   </tr>
                   
                   <tr class="noBorder">
                       <td>3</td>
                       <td>Assignment 1</td>
                       <td>12th B</td>
                       <td>34/50</td>
                       <td>View</td>
                       <td className="grade_input"><input
                            type="text"
                            name="name"
                            onChange={onChangeHandler_three}
                            onKeyPress={handleKeypress_three}
                            value={inputValue_three}
                            disabled={disabled_three}
                        /></td>
                   </tr>

                   </table>
            </span>
            <span className="table-line"></span>
            </span>
            <div className="bot">
            <span className="circle-add">
            <img className="plus" src={plus}></img>    
            </span>    
            </div>
            <span className="footer-a">All rights are reserved MindX 2021</span>
             <div className="bottom-line"></div>   
        </div>
    )
}

export default AssignmentsT
