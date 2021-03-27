import './Report.css';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Prize from './prize.png';
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';
import Share from './share.png';
import XLS from './xls.png';
import PDF from './pdf.png';

function Report() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className="Report">
            <div className="Dashboard__heading_row">
                <div className="arrow">
                  <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
               </div>
                <div className="Dashboard__title">My&nbsp;Report</div>
                <div className="Dashboard__line" />
            </div>
            <div className="Report__title">
                <div>Session 2020-2021 Report</div>
                {open1 ? 
                    <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen1(false)}}/>
                    :
                    <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen1(true)}}/>
                }
            </div>
            {open1 && <div className="Report__body">
                <div className="Report__body_head">
                    <div className="Report__column">
                        <p>Maximum Attendance: 110</p>
                        <p>Your Total Attendance: 92</p>
                    </div>
                    <div className="Report__column">
                        <p>Total Percentage: 75.67%</p>
                        <p>Student Result: Pass</p>
                    </div>
                    <img src={Prize} alt="Prize" className="prize"/>
                    
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1">S.No.</div>
                    <div className="Report__subject_2">Subject Name</div>
                    <div className="Report__subject_3">Max. Marks</div>
                    <div className="Report__subject_4">Marks Obtained</div>
                    <div className="Report__subject_5">Grade</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">1</div>
                    <div className="Report__subject_2">English</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">73</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">2</div>
                    <div className="Report__subject_2">Literature</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">81</div>
                    <div className="Report__subject_5">A</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">3</div>
                    <div className="Report__subject_2">Physics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">65</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">4</div>
                    <div className="Report__subject_2">Chemistry</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">67</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">5</div>
                    <div className="Report__subject_2">Mathematics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">77</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">6</div>
                    <div className="Report__subject_2">Computer</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">91</div>
                    <div className="Report__subject_5">A+</div>
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1"></div>
                    <div className="Report__subject_2"></div>
                    <div className="Report__subject_3">600</div>
                    <div className="Report__subject_4">454</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_footer">
                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={Share} alt="Share Icon"/>
                            Share Report
                        </div>
                    </div>

                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Report__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}
            
            <div className="Report__title">
                <div>Session 2019 -2020 Report</div>
                {open2 ? 
                    <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen2(false)}}/>
                    :
                    <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen2(true)}}/>
                }
            </div>
            {open2 && <div className="Report__body">
                <div className="Report__body_head">
                    <div className="Report__column">
                        <p>Maximum Attendance: 110</p>
                        <p>Your Total Attendance: 92</p>
                    </div>
                    <div className="Report__column">
                        <p>Total Percentage: 75.67%</p>
                        <p>Student Result: Pass</p>
                    </div>
                    <img src={Prize} alt="Prize" className="prize"/>
                    
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1">S.No.</div>
                    <div className="Report__subject_2">Subject Name</div>
                    <div className="Report__subject_3">Max. Marks</div>
                    <div className="Report__subject_4">Marks Obtained</div>
                    <div className="Report__subject_5">Grade</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">1</div>
                    <div className="Report__subject_2">English</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">73</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">2</div>
                    <div className="Report__subject_2">Literature</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">81</div>
                    <div className="Report__subject_5">A</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">3</div>
                    <div className="Report__subject_2">Physics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">65</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">4</div>
                    <div className="Report__subject_2">Chemistry</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">67</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">5</div>
                    <div className="Report__subject_2">Mathematics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">77</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">6</div>
                    <div className="Report__subject_2">Computer</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">91</div>
                    <div className="Report__subject_5">A+</div>
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1"></div>
                    <div className="Report__subject_2"></div>
                    <div className="Report__subject_3">600</div>
                    <div className="Report__subject_4">454</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_footer">
                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={Share} alt="Share Icon"/>
                            Share Report
                        </div>
                    </div>

                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Report__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}

            <div className="Report__title">
                <div>Reports Older than 2019 - 2020</div>
                {open3 ? 
                    <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen3(false)}}/>
                    :
                    <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen3(true)}}/>
                }
            </div>
            {open3 && <div className="Report__body">
                <div className="Report__body_head">
                    <div className="Report__column">
                        <p>Maximum Attendance: 110</p>
                        <p>Your Total Attendance: 92</p>
                    </div>
                    <div className="Report__column">
                        <p>Total Percentage: 75.67%</p>
                        <p>Student Result: Pass</p>
                    </div>
                    <img src={Prize} alt="Prize" className="prize"/>
                    
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1">S.No.</div>
                    <div className="Report__subject_2">Subject Name</div>
                    <div className="Report__subject_3">Max. Marks</div>
                    <div className="Report__subject_4">Marks Obtained</div>
                    <div className="Report__subject_5">Grade</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">1</div>
                    <div className="Report__subject_2">English</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">73</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">2</div>
                    <div className="Report__subject_2">Literature</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">81</div>
                    <div className="Report__subject_5">A</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">3</div>
                    <div className="Report__subject_2">Physics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">65</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">4</div>
                    <div className="Report__subject_2">Chemistry</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">67</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">5</div>
                    <div className="Report__subject_2">Mathematics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">77</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">6</div>
                    <div className="Report__subject_2">Computer</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">91</div>
                    <div className="Report__subject_5">A+</div>
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1"></div>
                    <div className="Report__subject_2"></div>
                    <div className="Report__subject_3">600</div>
                    <div className="Report__subject_4">454</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_footer">
                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={Share} alt="Share Icon"/>
                            Share Report
                        </div>
                    </div>

                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Report__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}

            
            <div className="Report__title">
                <div>All Assessments Reports</div>
                {open4 ? 
                    <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen4(false)}}/>
                    :
                    <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen4(true)}}/>
                }
            </div>
            {open4 && <div className="Report__body">
                <div className="Report__body_head">
                    <div className="Report__column">
                        <p>Maximum Attendance: 110</p>
                        <p>Your Total Attendance: 92</p>
                    </div>
                    <div className="Report__column">
                        <p>Total Percentage: 75.67%</p>
                        <p>Student Result: Pass</p>
                    </div>
                    <img src={Prize} alt="Prize" className="prize"/>
                    
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1">S.No.</div>
                    <div className="Report__subject_2">Subject Name</div>
                    <div className="Report__subject_3">Max. Marks</div>
                    <div className="Report__subject_4">Marks Obtained</div>
                    <div className="Report__subject_5">Grade</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">1</div>
                    <div className="Report__subject_2">English</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">73</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">2</div>
                    <div className="Report__subject_2">Literature</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">81</div>
                    <div className="Report__subject_5">A</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">3</div>
                    <div className="Report__subject_2">Physics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">65</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">4</div>
                    <div className="Report__subject_2">Chemistry</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">67</div>
                    <div className="Report__subject_5">B</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">5</div>
                    <div className="Report__subject_2">Mathematics</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">77</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_body">
                    <div className="Report__subject_1">6</div>
                    <div className="Report__subject_2">Computer</div>
                    <div className="Report__subject_3">100</div>
                    <div className="Report__subject_4">91</div>
                    <div className="Report__subject_5">A+</div>
                </div>
                <div className="Report__subject_header">
                    <div className="Report__subject_1"></div>
                    <div className="Report__subject_2"></div>
                    <div className="Report__subject_3">600</div>
                    <div className="Report__subject_4">454</div>
                    <div className="Report__subject_5">B+</div>
                </div>
                <div className="Report__subject_footer">
                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={Share} alt="Share Icon"/>
                            Share Report
                        </div>
                    </div>

                    <div className="Report__Button_row">
                        <div className="Report__Button">
                            <img src={XLS} alt="Download XLS"/>
                            Download XLS
                        </div>

                        <div className="Report__Button">
                            <img src={PDF} alt="Download PDF"/>
                            Download PDF
                        </div>
                    </div>
                    
                </div>
            </div>}

        </div>
    )
}

export default Report;
