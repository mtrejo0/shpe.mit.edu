import React, {Component} from 'react';


export default class Avatar extends Component {
    render() {
        var image = this.props.image
        
        if (!image) return null;
        
        return (
            <img src={image} alt="" /> 
        );
    }
}
