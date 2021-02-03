import React from 'react';

import './footer.css';

import logo from '../../assets/images/Header/logo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src={logo} alt="logo"/>
                <p>
                    Trafalgar provides progressive, and affordable<br/>
                    healthcare, accessible on mobile and online<br/>
                    for everyone
                </p>
                <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>
            <div className="footer_right">
                <ul>
                    <li><h3>Company</h3></li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                </ul>
                <ul>
                    <li><h3>Region</h3></li>
                    <li>Indonesia</li>
                    <li>Singapore</li>
                    <li>Hongkong</li>
                    <li>Brazil</li>
                </ul>
                <ul>
                    <li><h3>Help</h3></li>
                    <li>Help center</li>
                    <li>Contact support</li>
                    <li>Instructions</li>
                    <li>How it works</li>
                </ul>
            </div>
        </div>
    )
}

