import React, { Component } from 'react';
import Avatar from './avatar';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;
      // console.log(info.name);

        return (
            <div className="sponsor">
                <div className="sponsor-portrait">
                    <Avatar
                        image={info.photo}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="sponsor-text">
                    <h4>{info.name}</h4>
                </div>
            </div>
        )
    }
}
