import React, { Component } from 'react';
import Avatar from './avatar';
import '../styles/sponsors.css';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;
      console.log(info.name);

        return (
            <div className="sponsor boxShadow">
                <h1>{info.name}</h1>
                <div className="sponsor-portrait">
                    <Avatar
                        image={info.photo}
                    />
                </div>
            </div>
        )
    }
}
