import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CoverList from '../components/cover_list';

class AlbumLists extends Component {

	render(){
		const albums = this.props.artist.all.map( album => {
			const bgImg = album.images[1].url;
			return (
				<CoverList
					src={bgImg}
					className="cover"
					id={album.id}
					key={album.id}
					alt={album.name}
				/>
			);
		})

		return (
			<div className="text-center">
				<ul>
					{albums}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({artist}){
	return {
		artist
	};
}

export default connect(mapStateToProps)(AlbumLists);

