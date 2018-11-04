// Events.jsx

import React, { Component } from 'react';
import { getEvents } from '../services/events';
import '../styles/events.css'



class Events extends Component {
	constructor () {
        super()
		this.state = {
			events: [],
			getEventsCalled: false
		}
	}

	async loadEvents() {
		getEvents((events) => {
			console.log("hie");
			console.log(events);
			console.log(events.length);
			this.setState({events: events, getEventsCalled: false})
		})
	}

	componentDidMount () {
		this.loadEvents();
	}

	getEventDate(date) {
		var dayOfWeek = {
			0: "Monday",
			1: "Tuesday",
			2: "Wednesday", 
			3: "Thursday",
			4: "Friday",
			5: "Saturday",
			6: "Sunday"
		}

		let eventDate = new Date(date);
		
		let WeekDay = dayOfWeek[eventDate.getDay()];
		let mdy = String(eventDate.getMonth()) 	+ '/' 
				+ String(eventDate.getDate()) 	+ '/' 
				+ String(eventDate.getFullYear());
		return WeekDay + ' ' +mdy;
	}

	showEvents() {
		let sortedEvents = this.state.events.sort(function(a,b){
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(a.start.dateTime) - new Date(b.start.dateTime);
		});
		let events = [];
		console.log("hello");
		sortedEvents.forEach(event => {
			console.log("yeet");
			console.log(event);
			let eventDate = this.getEventDate(event.start.dateTime);
			console.log(eventDate);
			let eventDiv = (
				<div key={Math.random()} className="event">
					<h3><a href={event.htmlLink} target="_blank">{event.summary}</a></h3>
					<h4>{event.location} | {eventDate}</h4>
					<p>{event.description}</p>
				</div>
			)
			events.push(eventDiv);
		})
		return events
	}

	render() {
		if (!this.state.events && !this.state.getEventsCalled) {
			return (
				<div className="events">No events coming up!</div>
			)
		} else if (this.state.events.length === 0){
			console.log("ahhh");
			return (
				<p style={{color:'red'}}>Please press "Upcoming Events" to make the events load (this will be fixed)</p>
			)
		} else {
			// console.log(this.events.length)
			return (
				<div className="events">
					{
						this.showEvents().map(event => {
							return event
						})
					}
				</div>
			)
		}
		
	}
}

export default Events;
