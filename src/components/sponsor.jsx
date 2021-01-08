import React, { Component } from 'react';
import Avatar from './avatar';
import '../styles/sponsors.css';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;

        return (
            <div className="sponsor boxShadow">
                <h4>{info.name}</h4>
                <div className="sponsor-portrait">
                    <Avatar
                        image={info.photo}
                    />
                </div>
                <p><a href={info.link} target="_blank" rel="noopener noreferrer">Apply!</a></p>
            </div>
        )
    }
}
