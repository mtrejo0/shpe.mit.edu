import React, {Component} from 'react';

export default class Avatar extends Component {
    render() {
        console.log(this.props.image);
        var image = this.props.image,
            style = {
                width: this.props.width || 50,
                height: this.props.height || 50
            };
        
        if (!image) return null;
        
        return (
        <div className="avatar" style={style}>
            <img src={image} alt="nudes"/> 
        </div>
        );
    }
}