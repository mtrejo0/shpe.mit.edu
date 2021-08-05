// Events.jsx

import React, { Component } from 'react';
import '../styles.css';

class Events extends Component {

	render() {
		return (
			<div className="events">
				<iframe
					title='calendar'
					src="https://calendar.google.com/calendar/embed?src=latinoculturalcenter%40gmail.com&ctz=America%2FNewYork"
					className='nice-border calendar'
					width="800" height="600" frameBorder="0" scrolling="no"/>
				<p style={{marginBottom: "100px"}}>Add this calendar!!</p>	
			</div>
		)

	}
}

export default Events;
