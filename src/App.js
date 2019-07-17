import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBord from './components/dashBoard';

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={Login} />
				<Route path="/Dashboard" component={DashBord}/>
			</div>
		</Router>
	);
}

export default App;
