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
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getQuestions();
    }, [])

    useEffect(() => {
        console.log("Questions: ", questions);
    }, [questions])

    const optionSelected = (option) =>{
        if(answeredQuestions[questionNumber]!==undefined && questions[questionNumber-1]?.correct == answeredQuestions[questionNumber]){
            console.log("Last answer was correct");
            setScore(score-1);
        }
        answeredQuestions[questionNumber]=option; 
        if(questions[questionNumber-1]?.correct == option){
            console.log("correct");
            setScore(score+1);
        }
        else{
            console.log("wrong");
        }
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
                    {
                        questions.map((item, i) => {
                            if(i==questionNumber-1){
                                return <div className="Test__question_number activeQuestion" key={i}>{i+1}</div>
                            }
                            else{
                                return <div className="Test__question_number" key={i} onClick={()=>setQuestionNumber(i+1)}>{i+1}</div>
                            }
                        })
                    }
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
                    {answeredQuestions[questionNumber] === 'a'? (
                        <div className="Test__option selectedOption" onClick = {()=>optionSelected('a')}>
                            <div className="Test__option_letter">A</div>
                            <div className="Test__option_text whiteText">{questions[questionNumber-1]?.a}</div>
                        </div>
                    )
                    : (
                        <div className="Test__option" onClick = {()=>optionSelected('a')}>
                            <div className="Test__option_letter">A</div>
                            <div className="Test__option_text">{questions[questionNumber-1]?.a}</div>
                        </div>
                    )}
                    
                    {answeredQuestions[questionNumber] === 'b'? (
                        <div className="Test__option selectedOption" onClick = {()=>optionSelected('b')}>
                            <div className="Test__option_letter">B</div>
                            <div className="Test__option_text whiteText">{questions[questionNumber-1]?.b}</div>
                        </div>
                    )
                    : (
                        <div className="Test__option" onClick = {()=>optionSelected('b')}>
                            <div className="Test__option_letter">B</div>
                            <div className="Test__option_text">{questions[questionNumber-1]?.b}</div>
                        </div>
                    )}
                </div>
                
                <div className="Test__options_grid">
                    {answeredQuestions[questionNumber] === 'c'? (
                        <div className="Test__option selectedOption" onClick = {()=>optionSelected('c')}>
                            <div className="Test__option_letter">C</div>
                            <div className="Test__option_text whiteText">{questions[questionNumber-1]?.c}</div>
                        </div>
                    )
                    : (
                        <div className="Test__option" onClick = {()=>optionSelected('c')}>
                            <div className="Test__option_letter">C</div>
                            <div className="Test__option_text">{questions[questionNumber-1]?.c}</div>
                        </div>
                    )}
                    {answeredQuestions[questionNumber] === 'd'? (
                        <div className="Test__option selectedOption" onClick = {()=>optionSelected('d')}>
                            <div className="Test__option_letter">D</div>
                            <div className="Test__option_text whiteText">{questions[questionNumber-1]?.d}</div>
                        </div>
                    )
                    : (
                        <div className="Test__option" onClick = {()=>optionSelected('d')}>
                            <div className="Test__option_letter">D</div>
                            <div className="Test__option_text">{questions[questionNumber-1]?.d}</div>
                        </div>
                    )}
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
