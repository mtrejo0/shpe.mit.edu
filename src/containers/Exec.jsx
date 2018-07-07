import React, { Component } from 'react';
import Officer from '../components/officer';
import '../styles/Officer.css';
export default class Header extends Component {

    render() {
        return (
            <div>
                <h1>Our Exec Board!</h1>
                <Officer info={user.basicInfo} />
                <Officer info={user.basicInfo} />
                <Officer info={user.basicInfo} />
                <Officer info={user.basicInfo} />
            </div>
        )
    }
}

var user = {
    basicInfo: {
      name: "Xavier Zapien",
      year: "Senior",
      major: "Electrical Engineering",
      position: "President",
      photo: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/35243305_1631016017021283_5870034328607522816_o.jpg?_nc_cat=0&oh=fb49a4968dabc28dacc16a05bd85ccef&oe=5B9E45A7",
      bio: "Hi my name is Xavier and I like tacos and electrocuting things. When I want things to get done, I run to the top of a mountain, post it on my snapchat story, and take a siesta. #VamosRussia"
    }
}