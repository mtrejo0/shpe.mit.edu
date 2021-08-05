import React, { Component } from 'react';
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
            <div className="nice-border officer">
                <img src={process.env.PUBLIC_URL + info.photo}  className="profile" alt={info.photo}></img>

                <div className="team-member-text">
                    <a href={this.generateMailTo()} target="_none"><h3>{info.name}</h3></a>
                    <h4>{info.position} | {info.year}</h4>
                    <p>{info.bio}</p>
                </div>
            </div>
        )
    }
}
