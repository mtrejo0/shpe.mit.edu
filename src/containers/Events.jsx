// Events.jsx

import React, { Component } from 'react';
import { getEvents } from '../services/events';
import '../styles/events.css'



class Events extends Component {
	constructor(props) {
        super(props);
	}

	render() {
		return (
			<div className="events">
				<iframe
					src="https://calendar.google.com/calendar/embed?src=latinoculturalcenter%40gmail.com&ctz=America%2FNewYork"
					style={{border: 0, boxShadow: '0 0 16px #aaa', borderRadius: '32px', padding: '24px', marginBottom: "100px"}} width="800" height="600" frameBorder="0" scrolling="no"/>
			</div>
		)

	}
}

export default Events;
