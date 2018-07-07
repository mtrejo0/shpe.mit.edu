import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 className="App-title">Society of Hispanic Professional Engineers</h1>
                <h2 className="App-subtitle">Massachusetts Institute of Technology (MIT) Chapter</h2>
            </header>
        )
    }
}
