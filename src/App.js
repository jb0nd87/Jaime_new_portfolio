import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/projects' component={Projects} />
					<Route path='/contact-me' component={ContactMe} />
					<Route path='/skills' component={Skills} />
					<Route path='/about-me' component={AboutMe} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
