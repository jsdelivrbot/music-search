import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Main from './main';
import AlbumDetails from '../containers/album_details';

const App = (props) => {
	return (
		<div>
			<Route exact path='/' component={Main}/>
			<Route path="/albums/:id" component={AlbumDetails}/>
		</div>
	);
};

export default App;