import React from 'react';
import Header from './components/header';
import Main from './containers/Main';

const App = () => (
	<div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
		<Header />
		<Main />
	</div>
)

export default App;
