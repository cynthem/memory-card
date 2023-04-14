import React from 'react';
import goldenSnitch from '../assets/goldenSnitch.png';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">Made by CMP</p>
            <a 
            className="footer-link" 
            href="https://github.com/cynthem"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img
                className="footer-img"
                alt="Golden snitch"
                src={goldenSnitch}
                />
            </a>
        </div>
    )
}

export default Footer;