import React, { Component } from 'react';
import '../styles.css';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;

        return (
            <div className="center nice-border sponsor">
                <h1>{info.name}</h1>
                <h3><a href={info.link} target="_blank" rel="noopener noreferrer">Apply!</a></h3>
                <img src={process.env.PUBLIC_URL + info.photo}  className="sponsor-image" alt={info.photo}></img>
                
            </div>
        )
    }
}
