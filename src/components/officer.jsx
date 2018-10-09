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
      
    //   return (
    //     <div className="user grid-item">
    //         <div className="top">
    //             <Avatar 
    //                 image={info.photo} 
    //                 width={150}
    //                 height={150}
    //             />
    //             <h2><a href={this.generateMailTo()} target="_none">{info.name}</a></h2>
    //             <h3>{info.position}</h3>
                
    //             <hr />
    //             <p>{info.year} | {info.major}</p>
    //         </div>
            
    //         <div className="bottom">
    //             <h4>Biography</h4>
    //             <p>{info.bio}</p>
    //         </div>
    //     </div>
    //   );
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
                    <h3><a href={this.generateMailTo()} target="_none">{info.name}</a></h3>
                    <h4>{info.position} | {info.year}</h4>
                    <p>{info.bio}</p>
                </div>
            </div>
        )
    }
}