import React, { Component } from 'react';
import '../styles.css';
import information from '../information/quotes_2020.json'

export default class About extends Component {

	constructor() {
        super();
        this.state = {
			quotes: [],
        }
    }

	
    componentWillMount() {
        this.setState({
            ...this.state,
            quotes: information
        })
	}


	
    render() {
        return (
        <div className="mission">
			<div className='center'>
				<img src={process.env.PUBLIC_URL + `/images/exec_2019.jpeg`} className='image' alt='exec'></img>
			</div>
			<div className="section">
				<h3>Our Mission</h3>
				<p>The Society of Hispanic Professional Engineers is the largest Hispanic Engineering and Science organization across the U.S. and Puerto Rico.
One of 236 student chapters, SHPE-MIT was established in 1987 and has grown to become one of the strongest and successful chapters in the Northeast.
	SHPE-MIT is dedicated to developing the professional and academic skills of our members by offering them internship, networking, mentoring, and diversity awareness opportunities.</p>
<a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer" ><button className='button'>Join Our Mailing List!</button></a>				
			</div>
			<div className='center'>
				<img src={process.env.PUBLIC_URL + `/images/conference_2019_1.jpg`} className='image' alt='conference1'></img>
			</div>
			
			<div className="section">
				<h3>Interested in Joining?</h3>
				<p>We're always looking for new members! While we may be called
					"Society of Hispanic Professional Engineers" we welcome people
					from any and all majors. Also, and this may come as a suprise
					to you, but being hispanic is not a requirement to be a member!
					Please email shpe-exec@mit.edu if you're interested in getting involved!</p>
			</div>
			<div className='center'>
				<img src={process.env.PUBLIC_URL + `/images/retreat_2019.jpg`} className='image' alt='retreat'></img>
			<img src={process.env.PUBLIC_URL + `/images/conference_2019_2.jpg`} className='image' alt='conference2'></img>
			</div>
			
			<br></br>
			<center>
				<h1>Why do you love SHPE?</h1>
				<div class = "quotes">
					{this.state.quotes.map( (x) => <h4>" {x} "</h4>)}
				</div>
			</center>
			
		</div>
        )
    }
}
