import React from 'react'
import '../components/Feedback.css'

function Feedback() {
    return (
        <div className="popup-feedback">
            <div className="popup-title">
                User Feedback!!
            </div>
            <div className="question">
                Q1. How did you like the app?
            </div>
            <div className="stars">
                <span>★★★★★★★★★★</span>
            </div>
            <div className="rate">
                <span className="rate-1">Poor</span>
                <span className="rate-2">Average</span>
                <span className="rate-3">Excellent</span>
            </div>
            <button className="feedback-btn">Next</button>
            
        </div>
    )
}

export default Feedback
