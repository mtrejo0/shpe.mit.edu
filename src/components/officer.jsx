import React, { Component } from 'react';
import Avatar from './avatar';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    generateMailTo() {
        let kerb = this.props.info.email
        let name = this.props.info.name

        return `mailto:${kerb}?subject=Hi%20${name},%20 I'd like to connect`
    }

    render() {
      var info = this.props.info;

      if (!info) return null;
        return (
            <div className="team-member">
                <div className="team-member-portrait">
                    <Avatar
                        image={info.photo}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="team-member-text">
                    <a href={this.generateMailTo()} target="_none"><h3>{info.name}</h3></a>
                    <h4>{info.position} | {info.year}</h4>
                    <p>{info.bio}</p>
                </div>
            </div>
        )
    }
}
