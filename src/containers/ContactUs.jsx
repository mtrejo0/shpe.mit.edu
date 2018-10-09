import React, { Component } from 'react';

import '../styles/contact.css';

export default class Header extends Component {
    render() {
        return (
            <div className="section">
                <h3>Contact us!</h3>
                <p>We love connecting with members of the community who want to do work with us or with companies who'd like to learn more about opportunities connecting with SHPE and our talented pool of members directly. For all inquiries, please email <a href="mailto:shpe-exec@mit.edu?subject=Hello%20SHPE-MIT!">shpe-exec@mit.edu</a>!</p>
                <p>You can also find us on the <a href="https://www.facebook.com/shpemit" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://www.linkedin.com/groups/5182958/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
        )
    }
}
