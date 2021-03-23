import './MobileHeader.css';
import React from 'react'
import Logo from '../../logo.png';
import Hamburger from './hamburger.svg';
import {Link} from "react-router-dom";

function MobileHeader({setShowSidebar}) {
    return (
        <div className="MobileHeader">
            <img src={Hamburger} alt="Menu" width="30px" className="MobileHeader__Menu" onClick={()=>{setShowSidebar(false);}}/>
            <Link to="/dashboard" className="MobileHeader__logo"><img src={Logo} alt="MindX Logo" /></Link>
        </div>
    );
}

export default MobileHeader;
