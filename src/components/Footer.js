import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="#facebook"><img src="/facebook-icon.png" alt="Facebook" /></a>
                    <a href="#twitter"><img src="/twitter-icon.png" alt="Twitter" /></a>
                </div>
                <div className="footer-copyright">
                    &copy; 2024 Sixer Alumni. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
