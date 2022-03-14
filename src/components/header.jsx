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
            <li><NavLink to='/events' activeStyle={active} >Calendar</NavLink></li>
            <li><NavLink to='/comserve' activeStyle={active} >Community Service</NavLink></li>
            <li><NavLink to='/sponsors' activeStyle={active} >Sponsors</NavLink></li>
            <li><NavLink to='/contact' activeStyle={active} >Contact Us</NavLink></li>
            <li className='sign-up'><a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer" >Sign Up</a></li>
            <li className='donate'><a href="https://giving.mit.edu/form/#/" target="_blank" rel="noopener noreferrer" >Donate</a></li>
        </ul>
    </div>
)

export default Header;
