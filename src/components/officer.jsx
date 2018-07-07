import React, { Component } from 'react';
import Avatar from './avatar';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;
      if (!info) return null;
      
      return (
        <div className="user">
            <div className="top">
                <Avatar 
                    image={info.photo} 
                    width={100}
                    height={100}
                /> 
                <h2>{info.name}</h2>
                <h3>{info.position}</h3>
                
                <hr />
                <p>{info.year} | {info.major}</p>
            </div>
            
            <div className="bottom">
                <h4>Biography</h4>
                <p>{info.bio}</p>
            </div>
        </div>
      );
    }
}