import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SearchBar from '../containers/search_bar';
import AlbumLists from '../containers/album_lists';

const Main = (props) => (
	<div>
		<SearchBar/>
		<AlbumLists/>
	</div>
);

export default Main;