import React from 'react'
import Back from '../images/back-icon.png';
import up from '../images/up.png'
import './Performance.css'
import {Line, Bar} from "react-chartjs-2";
import pdf from "../images/pdf-icon.png";


function Performance() {
    return (
        <div>
             <div className="top-line"></div>
             <div className="bottom-line"></div>
             <div className="head">
            <span className="back">
            <img className="back-icon" src={Back}></img>
            </span>
            <span className="title-a">Performance</span>
            <span className="line"></span>   
            </div>
            <span className="table-t">
                <span className="t-1-p">Class: 12th</span>
                <span className="t-2-p">Section: A</span>
                <img src={up} className="up"></img>
            </span>
            <span className="table-c-1">
                
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
                >
                </span>
                <span className="y-info">
                    Marks
                    <span className="line-p-2"></span>
                    >
                </span>
                <button className="pdf-btn">
                    <img src={pdf}></img>
                    Download PDF
                </button>
            </span>
            <span className="footer-a">All rights are reserved MindX 2021</span>
        </div>
    )
}

export default Performance
