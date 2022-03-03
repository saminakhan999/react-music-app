import React from 'react';
import Speech from 'react-speech';
import './index.css';

const Footer = () => {
    return (
    <>
        <span id="footer">&copy; MAHARANI INC. 
        <div className="speech">
            <Speech text="Maharani Inc is really cool" />
        </div>
        </span>
    </>
    )
}

export default Footer;
