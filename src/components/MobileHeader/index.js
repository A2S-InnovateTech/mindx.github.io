import './MobileHeader.css';
import React from 'react'
import Logo from '../../logo.png';
function MobileHeader() {
    return (
        <div className="MobileHeader">
            <img src={Logo} alt="MindX Logo"/>
        </div>
    );
}

export default MobileHeader;
