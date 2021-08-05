import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

var active = {
    fontWeight: 'bold',
    color: '#001F5B'
}

const Header = () => (
    <div className="center">
        <img src="./logo.png" alt="nice" className="header-img"></img>
        <ul className='nav-center'>
            <li><NavLink exact to='/' activeStyle={active} >About Us</NavLink></li>
            <li><NavLink to='/exec' activeStyle={active} >Executive Board</NavLink></li>
            <li><NavLink to='/events' activeStyle={active} >Upcoming Events</NavLink></li>
            <li><NavLink to='/comserve' activeStyle={active} >Community Service</NavLink></li>
            <li><NavLink to='/contact' activeStyle={active} >Contact Us</NavLink></li>
            <li><NavLink to='/sponsors' activeStyle={active} >Sponsors</NavLink></li>
            <a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer" ><button className='button'>Sign Up!</button></a>
        </ul>
    </div>
)

export default Header;
