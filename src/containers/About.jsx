import React, { Component } from 'react';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return (
        <div className="mission">
				<div className="exec-2019"></div>
				<div className="section">
					<h3>Our Mission</h3>
					<p>The Society of Hispanic Professional Engineers is the largest Hispanic Engineering and Science organization across the U.S. and Puerto Rico.
	One of 236 student chapters, SHPE-MIT was established in 1987 and has grown to become one of the strongest and successful chapters in the Northeast.
		SHPE-MIT is dedicated to developing the professional and academic skills of our members by offering them internship, networking, mentoring, and diversity awareness opportunities.</p>
				</div>
				<div className="conference-1"></div>
				<div className="section">
					<h3>Interested in Joining?</h3>
					<p>We're always looking for new members! While we may be called
						"Society of Hispanic Professional Engineers" we welcome people
						from any and all majors. Also, and this may come as a suprise
						to you, but being hispanic is not a requirement to be a member!
						Please email shpe-exec@mit.edu if you're interested in getting involved!</p>
						<p><a href="https://forms.gle/1wW6Ag3m8BWxw4Ed8" target="_blank" rel="noopener noreferrer">Sign Up</a> for our mailing list with your mit.edu email! </p>
				</div>
        <div className="retreat-2019"></div>
        <div className="conference-2"></div>
			</div>
        )
    }
}
