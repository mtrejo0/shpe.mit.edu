import React, { Component } from 'react';
import './styles/App.css';
import './styles/Tabs.css';
import Header from './components/header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import About from './containers/About';
import Sponsors from './containers/Sponsors';
import Exec from './containers/Exec';
import ContactUs from './containers/ContactUs';


class App extends Component {
  render() {
    return (
		<div className="App">
		
			<Header />

			<Tabs>
				{/* The tabs */}
				<TabList>
					<Tab>About Us</Tab>
					<Tab>Our Sponsors</Tab>
					<Tab>Executive Board</Tab>
					<Tab>Contact Us</Tab>
				</TabList>

				{/* The content for each tab */}
				<TabPanel>
					<About/>
				</TabPanel>
				<TabPanel>
					<Sponsors/>
				</TabPanel>
				<TabPanel>
					<Exec/>
				</TabPanel>
				<TabPanel>
					<ContactUs/>
				</TabPanel>
			</Tabs>
		</div>
    );
  }
}

export default App;
