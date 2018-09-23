import React, { Component } from 'react';
import Header from './components/header';
import About from './containers/About';
// import Sponsors from './containers/Sponsors';
import Exec from './containers/Exec';
// import ContactUs from './containers/ContactUs';

class App extends Component {
	render() {
		return (
			<div className="App">

				<Header />
				<div className="App-Content">
					<About />
					{/* <Sponsors /> */}
					<Exec />
					{/* <ContactUs /> */}
				</div>
			</div>
		);
	}
}

export default App;
