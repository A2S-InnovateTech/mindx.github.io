import './MobileHeader.css';
import React from 'react'
import Logo from '../../logo.png';
import Hamburger from './hamburger.svg';

function MobileHeader({setShowSidebar}) {
    return (
        <div className="MobileHeader">
            <img src={Hamburger} alt="Menu" width="30px" className="MobileHeader__Menu" onClick={()=>{setShowSidebar(false);}}/>
            <img src={Logo} alt="MindX Logo" className="MobileHeader__logo"/>
        </div>
    );
}

export default MobileHeader;
