import React, { Component } from 'react';
import '../styles/commserve.css';

export default class ComServe extends Component {
    render() {
        return (
            <div className="wrapper">
				<center>
                    <h1>Noche de Ciencias</h1>
                    <h3>April 10th!</h3>
                    <h1>Mentoring</h1>
                    <h3><a href="https://tinyurl.com/mentorshpementor" target="_blank" rel="noopener noreferrer">Mentor Application</a></h3>
                    <h3><a href="https://tinyurl.com/mentorshpeapply" target="_blank" rel="noopener noreferrer">Mentee Application</a></h3>
                    <img class='mentor_shpe' src={process.env.PUBLIC_URL + `images/mentorshpe.png`} alt="" /> 
                </center>
            </div>
        )
    }
}
