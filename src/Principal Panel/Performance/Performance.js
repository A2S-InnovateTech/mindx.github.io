import React, {useState} from 'react'
import {Line, Bar} from "react-chartjs-2";
import {Link} from 'react-router-dom';
import './Performance.css'

import Back from './back-icon.png';
import pdf from "./pdf-icon.png";
import ArrowUp from './arrow_up.png';
import ArrowDown from './arrow_down.png';


function PrincipalPanel_Performance() {
    const [open1, setOpen1] = useState(true);

    return (
        <div className="container">
             {/* <div className="top-line"></div>
             <div className="bottom-line"></div> */}

             
            <div className="Dashboard__heading_row">
                <Link to="/principal/class-details">
                    <div className="arrow">
                        <img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/>
                    </div>
                </Link>
                
                <div className="Dashboard__title">Performance</div>
                <div className="Dashboard__line" />
            </div>
            
            

            <div className="Performance__title">
            
                <div className="Performance__title_class">Class : 12th</div>
                <div className="Performance__title_section">Section : A</div>
                {open1 ? 
                  <img src={ArrowUp} alt="Arrow Up" className="Arrow_img" onClick={()=>{setOpen1(false)}}/>
                  :
                  <img src={ArrowDown} alt="Arrow Down" className="Arrow_img" onClick={()=>{setOpen1(true)}}/>
                }
            </div>
       
           
            {open1 && <span className="table-c-1">
                
            <span className="chart">
                    <Line 
                    data={{
                        labels: ['Min marks', "Max Marks", "Avg Marks"],
                        datasets: [
                            {
                                
                                label: 'Marks',
                                data: [33,82,68],
                                backgroundColor: [' #10222E']
                            }
                        ]
                    }}

                    options={{
                        maintainAspectRatio: false,
                        scales:{
                        yAxes: [{
                            ticks:{
                                beginAtZero: true,
                                display: false
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Marks'
                            },
                        }],
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'No. of students'
                            },
                            ticks:{
                                display: false
                            },
                        }],
                        },  
                        legend: {
                            display: false
                        }, 
                    }}
                />
            </span>
            <span className="x-info">
                No.of students
                <span className="line-p"></span>
                </span>
                <span className="y-info">
                    Marks
                    <span className="line-p-2"></span>
                </span>
                <button className="pdf-btn">
                    <img src={pdf}></img>
                    Download PDF
                </button>
            </span> }

            <span className="footer-a">All rights are reserved MindX 2021</span>
        </div>
    )
}

export default PrincipalPanel_Performance
