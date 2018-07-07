import React, {Component} from 'react';

export default class Avatar extends Component {
    render() {
        var image = this.props.image,
            style = {
                width: this.props.width || 50,
                height: this.props.height || 50
            }; 
        
        if (!image) return null;
        
        return (
        <div className="avatar" style={style}>
            <img src={this.props.image} alt="nudes"/> 
        </div>
        );
    }
}