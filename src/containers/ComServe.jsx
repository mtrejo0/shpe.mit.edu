import React, { Component } from 'react';
import '../styles/commserve.css';

export default class ComServe extends Component {
    render() {
        return (
            <div className="wrapper">
				<center>
                    <h1>Noche de Ciencias</h1>
                    <h4>April 10th 2021</h4>
                    <img class='mentor_shpe' src={process.env.PUBLIC_URL + `images/noche.png`} alt="" />
                    <p>MIT’s SHPE Chapter holds an annual festival-type event called Noche de Ciencias, which will be held virtually and adapted for the Sin Limite Admits weekend this year. We will kick-off the event with an MIT-themed trivia, followed by a Q/A with SHPE Exec, and then a rooftop social on Gathertown with SHPE members!</p>
                    <hr></hr>
                    <h1>MentorSHPE</h1>
                    <h3><a href="https://tinyurl.com/mentorshpeapply" target="_blank" rel="noopener noreferrer">Mentee Application</a> - Apply by April 18!</h3>
                    <img class='mentor_shpe' src={process.env.PUBLIC_URL + `images/mentorshpe.png`} alt="" /> 
                </center>
            </div>
        )
    }
}
