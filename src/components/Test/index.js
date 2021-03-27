import React from 'react'
import './Test.css';
import Image1 from './Group 45.png';
import Image2 from './Group 46.png';
import Logo from '../../logo.png';

function Test() {
    return (
        <div className="Test">
            <div className="Test__header">
                <img src={Logo} alt="MindX Logo"/>
            </div>

            {/* <div className="Test__top_image">
                <img src={Image1} alt="Img 1"/>
                <img src={Image2} alt="Img 2"/>
            </div> */}

            <div className="Test__title">Test 2</div>

            <div className="Test__questions_row">
                <div className="Test__question_number">1</div>
                <div className="Test__question_number">2</div>
                <div className="Test__question_number">3</div>
                <div className="Test__question_number">4</div>
                <div className="Test__question_number">5</div>
                <div className="Test__question_number">6</div>
                <div className="Test__question_number">7</div>
                <div className="Test__question_number">8</div>
                <div className="Test__question_number">9</div>
                <div className="Test__question_number">10</div>
                <div className="Test__question_number">11</div>
                <div className="Test__question_number">12</div>
                <div className="Test__question_number">13</div>
                <div className="Test__question_number">14</div>
                <div className="Test__question_number">15</div>
            </div>

            <div className="Test__question_time_row">
                <div className="Test__subtitle">Question No : 1 of 15 </div>
                <div className="Test__subtitle">Time Left : 09 m 37 s</div>
            </div>

            <div className="Test__question_text">Q1. What is the S.I. unit of magnetic field ? </div>

            <div className="Test__options_grid">
                <div className="Test__option">
                    <div className="Test__option_letter">A</div>
                    <div className="Test__option_text">Tesla</div>
                </div>
                <div className="Test__option">
                    <div className="Test__option_letter">B</div>
                    <div className="Test__option_text">Volts</div>
                </div>
            </div>
            
            <div className="Test__options_grid">
                <div className="Test__option">
                    <div className="Test__option_letter">C</div>
                    <div className="Test__option_text">Meter</div>
                </div>
                <div className="Test__option">
                    <div className="Test__option_letter">D</div>
                    <div className="Test__option_text">Ohms</div>
                </div>
            </div>

            <div className="Test__button_row">
                <div className="Test__button_row_left">
                    <div className="Test__light_button">Previous</div>
                    <div className="Test__light_button">Next</div>
                </div>
                <div className="dark_button">Submit</div>
            </div>

            <div className="Test__footer_text">All rights are reserved MindX 2021</div>
        </div>
    )
}

export default Test
