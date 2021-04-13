import './PracticeTestTopic.css';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import classSubject from '../../subjects';
import { Row, Col } from 'react-bootstrap';

function PracticeTestTopic({props, userDetails}) {
      const [selectedSubject, setSelectedSubject] = useState(props?.subject || "Physics");
      var studentclass = userDetails.class.split(" ")[0];

    return (
               <div className="container">
           
    
        <div className="Dashboard__heading_row">
          <div className="arrow">
            <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
          </div>
          <div className="Dashboard__title">Practice&nbsp;Test</div>
          <div className="Dashboard__line" />
        </div>

         <section className="subjects_dropdown">
            <select className="browser-default" onChange={(e)=>setSelectedSubject(e.target.value)}>
              {classSubject[studentclass].map((item, i)=>(
                <option value={item} selected={props?.subject===item}>{item}</option>
              ))}
           </select>
         </section>

         <section>
           <h3>Subject : {selectedSubject}</h3>
           <div className="Dashboard__table">
                <table className="table">
                    <tr>
                        <th>S.No.</th>
                        <th>Topic</th>
                        <th>Total&nbsp;Marks</th>
                        <th>Action</th>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td>Literature&nbsp;1</td>
                        <td>15</td>
                        <td>
                        <Link to="/test" to={{
                            pathname:"/test",
                            state: { testNo: 1, practice: true, subject: selectedSubject }
                        }} style={{textDecoration:"none", color:"#10222E"}}>
                            Practice
                        </Link>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>2</td>
                        <td>Literature&nbsp;2</td>
                        <td>15</td>
                        <td>
                        <Link to="/test" to={{
                            pathname:"/test",
                            state: { testNo: 1, practice: true, subject: {selectedSubject} }
                        }} style={{textDecoration:"none", color:"#10222E"}}>
                            Practice
                        </Link>
                        </td>
                    </tr>
                </table>
            </div>
          
         </section>

       </div>

    )
}

export default PracticeTestTopic
