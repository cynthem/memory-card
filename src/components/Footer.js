import React from 'react';
import goldenSnitch from '../assets/goldenSnitch.png';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">Made by CMP</p>
            <a classname="footer-link" href="https://github.com/doozles411">
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