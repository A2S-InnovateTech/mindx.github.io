import React, {useState, useEffect} from 'react';
import './Test.css';
import Image1 from './Group 45.png';
import Image2 from './Group 46.png';
import Logo from '../../logo.png';
import Timer from 'react-compound-timer';
import firebase from 'firebase';
import app from '../../firebase';
import { useHistory } from "react-router-dom";


function Test({props, user, fetchUserDetails}) {
    const [testNumber, setTestNumber] = useState(props.testNo);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const history = useHistory();

    useEffect(() => {
        getQuestions();
    }, [])

    useEffect(() => {
        console.log("Questions: ", questions);
    }, [questions])

    const optionSelected = (option) =>{
        if(questions[questionNumber-1]?.correct == option){
            console.log("correct");
            setScore(score+1);
        }
        else{
            console.log("wrong");
        }
        if(questionNumber<=questions.length)
        setQuestionNumber(questionNumber+1);
    }

    const getQuestions = () => {
        app.firestore().collection("tests")
            .doc("test1")
            .collection("questions")
            .get()
            .then((snapshot) => {
                snapshot.docs.map(
                    (doc)=>{
                        setQuestions(oldQuestion => [...oldQuestion, doc.data()])
                    }
                )
            })
            .catch(e=>console.log(e));
    }

    const onSubmit = () =>{
        if(testNumber == 1){
            app.firestore().collection("users").doc(user?.uid).update("test1", score)
            .then(()=>{fetchUserDetails();})
            .catch(e=>console.log("Error in updating test 1 details: ", e))
            history.push("/results", {marks: score});
        }
        else 
        {
            app.firestore().collection("users").doc(user?.uid).update("test2", score, "assessmentTaken", true)
            .then(()=>{fetchUserDetails();})
            .catch(e=>console.log("Error in updating test 2 details: ", e))
            history.push("/results2", {marks: score});
        }
    }

    return (
        <Timer
            initialTime={600000}
            direction="backward"
        >
            {({reset}) => (
            <div className="Test">
                <div className="Test__header">
                    <img src={Logo} alt="MindX Logo"/>
                </div>

                {/* <div className="Test__top_image">
                    <img src={Image1} alt="Img 1"/>
                    <img src={Image2} alt="Img 2"/>
                </div> */}

                <div className="Test__title">Test {testNumber}</div>

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
                    <div className="Test__subtitle">Question No : {questionNumber} of {questions?.length} </div>
                    <div className="Test__subtitle">Time Left :&nbsp;
                        
                                <React.Fragment>
                                    <Timer.Minutes /> m&nbsp;
                                    <Timer.Seconds /> s
                                </React.Fragment>
                    </div>
                </div>

                <div className="Test__question_text">Q{questionNumber}. {questions[questionNumber-1]?.question} </div>

                <div className="Test__options_grid">
                    <div className="Test__option" onClick = {()=>optionSelected('a')}>
                        <div className="Test__option_letter">A</div>
                        <div className="Test__option_text">{questions[questionNumber-1]?.a}</div>
                    </div>
                    <div className="Test__option" onClick = {()=>optionSelected('b')}>
                        <div className="Test__option_letter">B</div>
                        <div className="Test__option_text">{questions[questionNumber-1]?.b}</div>
                    </div>
                </div>
                
                <div className="Test__options_grid">
                    <div className="Test__option" onClick = {()=>optionSelected('c')}>
                        <div className="Test__option_letter">C</div>
                        <div className="Test__option_text">{questions[questionNumber-1]?.c}</div>
                    </div>
                    <div className="Test__option" onClick = {()=>optionSelected('d')}>
                        <div className="Test__option_letter">D</div>
                        <div className="Test__option_text">{questions[questionNumber-1]?.d}</div>
                    </div>
                </div>

                <div className="Test__button_row">
                    <div className="Test__button_row_left">
                        <div className="Test__light_button" onClick={()=>{setQuestionNumber(questionNumber>1?questionNumber-1:questionNumber)}}>Previous</div>
                        <div className="Test__light_button" onClick={()=>{setQuestionNumber(questionNumber<questions.length?questionNumber+1:questionNumber)}}>Next</div>
                    </div>
                    <div className="dark_button" onClick={()=>onSubmit()}>Submit</div>
                </div>

                <div className="Test__footer_text">All rights are reserved MindX 2021</div>
            </div>
            )}
        </Timer>
    )
}

export default Test
