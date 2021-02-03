import React from 'react'
import './header.css';
import logo from '../../assets/images/Header/logo.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header__menu">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="header_list">
                    <li className="active"><a href=''>Home</a></li>
                    <li><a href="">Find a doctor</a></li>
                    <li><a href="">Apps</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </div>

        </div>
    )
}
