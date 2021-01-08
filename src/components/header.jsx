import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

var active = {
    fontWeight: 'bold',
    color: '#001F5B'
}

var logoStyle = {
    height: '150px',
}

const Header = () => (
    <header>
        <img src="./logo.png" alt="nice" className="center" style={logoStyle}></img>
        <nav>
            <ul>
                <li><NavLink exact to='/' activeStyle={active} >About Us</NavLink></li>
                <li><NavLink to='/exec' activeStyle={active} >Executive Board</NavLink></li>
                <li><NavLink to='/events' activeStyle={active} >Upcoming Events</NavLink></li>
                <li><NavLink to='/comserve' activeStyle={active} >Community Service</NavLink></li>
                <li><NavLink to='/contact' activeStyle={active} >Contact Us</NavLink></li>
                <li><NavLink to='/sponsors' activeStyle={active} >Sponsors</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header;
