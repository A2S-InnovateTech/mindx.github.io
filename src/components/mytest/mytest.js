import React, {Component} from 'react'
import Sidebar from './../Sidebar/index'
import './test.css'
import Back from '../../images/back-icon.png';
import Row from './test';
import {Link} from 'react-router-dom';


class  Test extends Component {

    state={
        persons:[
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            {colone : 'Physics' , coltwo : '11/03/21', colthree : '1 hrs', colfour : '38/50', colfive : 'View'},
            
        ]
    }

    render(){
        return (
            <div className="assignment">
                <div className="top-line"></div>
                <div className="bottom-line"></div>
                <div className="head">
                <span className="back">
                <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}><img className="back-icon" src={Back}></img></Link>
                </span>
                <span className="title-a">Test</span>
                <span className="line"></span>   
                </div>
                <span className="table-t">
                    <span className="t-1_Assignment">S No.</span>
                    <span className="t-2_Assignment">Subject</span>
                    <span className="t-3">Date</span>
                    <span className="t-4">Duration</span>
                    <span className="t-5_Assignment">Marks&nbsp;obtained</span>
                    <span className="t-6">Action</span>
                </span>
                <div className="table-r">
                <span className="table-c">
                   <table className="autoSerial">
                    <tbody>

                    {this.state.persons.map((item) => {
                return  <Row
                colone = {item.colone}
                coltwo = {item.coltwo}
                colthree = {item.colthree}
                colfour = {item.colfour}
                colfive = {item.colfive}
                />
                
                
                })}
                       </tbody>
                   </table>
                </span>
                <span className="table-line"></span>
                </div> 
                <span className="footer-a">All rights are reserved MindX 2021</span>
            </div>
        )
    }
   
}

export default Test
