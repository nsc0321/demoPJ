import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { styled } from 'styled-components';
import './assets/css/styles.css'

import Sidebar from './components/Sidebar';
import MenuList from './components/MenuList';
import HomePage from './pages/HomePage';
import Page1 from './pages/Pwage1';
import Page2 from './pages/Page2';

function App(){
	return (
		<Router>
			<div className="Container">
				<div className="HeaderContainer">
					ABCDE
				</div>
				<div className="AppContainer">
					<Sidebar></Sidebar>
					<div className="PageContainer">
						<Routes>
							<Route path='/' Component={HomePage}></Route>
							<Route path='/page1' Component={Page1}></Route>
							<Route path='/page2' Component={Page2}></Route>
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	)
	;
}

ReactDOM.render(App(), document.getElementById('root'));
