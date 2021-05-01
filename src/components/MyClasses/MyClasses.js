import './MyClasses.css';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';
import Statistics from '../../assets/images/statistics 1.png';
import XLS from '../../assets/images/xls-file 1.png';
import PDF from '../../assets/images/pdf-file 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function MyClasses() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
     
    return (
        <div className="container"> 
         
         <div className="Dashboard__heading_row">
            <div className="arrow">
                <Link to="/teacher/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
            </div>
            <div className="Dashboard__title">My&nbsp;Classes</div>
            <div className="Dashboard__line" />
          </div>

          <div className="Class__title">
            
                <div className="Class__title_class">Class : 12th</div>
                <div className="Class__title_section">Section : A</div>
             
              {open1 ? 
                  <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen1(false)}}/>
                  :
                  <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen1(true)}}/>
              }
          </div>
          {open1 && <div className="Class__body">
                <div className="Class__subject_header">
                    <div className="Class__subject_1">Roll No.</div>
                    <div className="Class__subject_2">Student Name</div>
                    <div className="Class__subject_3">Tests</div>
                    <div className="Class__subject_4">Assignment</div>
                    <div className="Class__subject_5">Attendance</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">1</div>
                    <div className="Class__subject_2">Amit Kumar</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">2</div>
                    <div className="Class__subject_2">Literature</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">3</div>
                    <div className="Class__subject_2">Physics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">4</div>
                    <div className="Class__subject_2">Chemistry</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">5</div>
                    <div className="Class__subject_2">Mathematics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_footer">
                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={Statistics} alt="Performance"/>
                            Performance
                        </div>
                    </div>

                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Class__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}
             <div className="Class__title">
            
                <div className="Class__title_class">Class : 12th</div>
                <div className="Class__title_section">Section : B</div>
             
              {open2 ? 
                  <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen2(false)}}/>
                  :
                  <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen2(true)}}/>
              }
          </div>
          {open2 && <div className="Class__body">
                <div className="Class__subject_header">
                    <div className="Class__subject_1">Roll No.</div>
                    <div className="Class__subject_2">Student Name</div>
                    <div className="Class__subject_3">Tests</div>
                    <div className="Class__subject_4">Assignment</div>
                    <div className="Class__subject_5">Attendance</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">1</div>
                    <div className="Class__subject_2">Amit Kumar</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">2</div>
                    <div className="Class__subject_2">Literature</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">3</div>
                    <div className="Class__subject_2">Physics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">4</div>
                    <div className="Class__subject_2">Chemistry</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">5</div>
                    <div className="Class__subject_2">Mathematics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_footer">
                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={Statistics} alt="Performance"/>
                            Performance
                        </div>
                    </div>

                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Class__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}
             <div className="Class__title">
            
                <div className="Class__title_class">Class : 11th</div>
                <div className="Class__title_section">Section : A</div>
             
              {open3 ? 
                  <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen3(false)}}/>
                  :
                  <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen3(true)}}/>
              }
          </div>
          {open3 && <div className="Class__body">
                <div className="Class__subject_header">
                    <div className="Class__subject_1">Roll No.</div>
                    <div className="Class__subject_2">Student Name</div>
                    <div className="Class__subject_3">Tests</div>
                    <div className="Class__subject_4">Assignment</div>
                    <div className="Class__subject_5">Attendance</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">1</div>
                    <div className="Class__subject_2">Amit Kumar</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">2</div>
                    <div className="Class__subject_2">Literature</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">3</div>
                    <div className="Class__subject_2">Physics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">4</div>
                    <div className="Class__subject_2">Chemistry</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_body">
                    <div className="Class__subject_1">5</div>
                    <div className="Class__subject_2">Mathematics</div>
                    <div className="Class__subject_3">View</div>
                    <div className="Class__subject_4">View</div>
                    <div className="Class__subject_5">View</div>
                </div>
                <div className="Class__subject_footer">
                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={Statistics} alt="Performance"/>
                            Performance
                        </div>
                    </div>

                    <div className="Class__Button_row">
                        <div className="Class__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Class__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}
            

         
        
        </div>
    )
}

export default MyClasses;
