import React from 'react'
import './style.css';
import logo from './../../assets/image/logo.png'

function Header() {
    return (
        <div className="header" >
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="wrapper">
                <strong className="title">
                    MY WEATHER FORECAST APP
                </strong>
            </div>
        </div>
    )
}

export default Header
