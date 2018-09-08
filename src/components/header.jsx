import React, { Component } from 'react';

var logoStyle = {
    width: '50%'
}

export default class Header extends Component {
    render() {
        return (
            <img src={"logo.png"} alt="logo" style={logoStyle}/>
            // <header>
            //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
            //     <h1 >Society of Hispanic Professional Engineers</h1>
            //     <h2 >Massachusetts Institute of Technology (MIT) Chapter</h2>
            // </header>
        )
    }
}
