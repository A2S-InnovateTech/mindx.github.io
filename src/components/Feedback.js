import React,{useState} from 'react'
import '../components/Feedback.css'
import Close from "../images/close-icon.png";

function Feedback({setOpenFeedback}) {
    const [highlightedStars, setHighlightedStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(0);
    
    const highlightStars = (starNumber) =>{
        setHighlightedStars(starNumber);
    }
    return (
        <div className="feedback__background">
        <div className="popup-feedback">
            <img src={Close} className="close-feedback" onClick={()=>setOpenFeedback(false)}></img>
            <div className="popup-title">
                User Feedback
            </div>
            <div className="question">
                Q1. How did you like the app?
            </div>
            <div className="stars">
                <span onMouseEnter={()=>highlightStars(1)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(1)} style={{color:highlightedStars>=1?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(2)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(2)} style={{color:highlightedStars>=2?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(3)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(3)} style={{color:highlightedStars>=3?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(4)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(4)} style={{color:highlightedStars>=4?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(5)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(5)} style={{color:highlightedStars>=5?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(6)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(6)} style={{color:highlightedStars>=6?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(7)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(7)} style={{color:highlightedStars>=7?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(8)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(8)} style={{color:highlightedStars>=8?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(9)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(9)} style={{color:highlightedStars>=9?"gold":"black", cursor:"pointer"}}>★</span>
                <span onMouseEnter={()=>highlightStars(10)} onMouseLeave={()=>{highlightStars(selectedStars)}} onClick={()=>setSelectedStars(10)}  style={{color:highlightedStars>=10?"gold":"black", cursor:"pointer"}}>★</span>
            </div>
            <div className="rate">
                <span className="rate-1">Poor</span>
                <span className="rate-2">Average</span>
                <span className="rate-3">Excellent</span>
            </div>
            <button className="feedback-btn">Next</button>
            
        </div>
        </div>
    )
}

export default Feedback
