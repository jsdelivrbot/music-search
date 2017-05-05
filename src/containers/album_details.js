import React, {Component, propTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrack} from '../actions/index';
import _ from 'lodash';

import TrackList from '../components/track_list';

class AlbumDetails extends Component {

	componentWillMount(){
		const {params: {id}} = this.props.match;
		this.props.fetchTrack(id);
	}

	render(){
		const {album: {images}} = this.props;
		const imgSrc = _.get(images, "[1].url");
		const trackItems = _.get(this.props.album, 'tracks.items');
		const tracks = _.values(trackItems).map( (track) => {
			return (
				<TrackList 
					title={track.name} 
					key={track.key}
					audioSrc={track.preview_url}
					playing={false} 
					controls={true}
					height={50}
					width={"100%"}
				/>
			);
		});

		if(!this.props.album){
			return <div>Loading...</div>
		}

		return (
			<div className="container">
				<div>
					<img className="track-list img-fluid center" src={imgSrc} alt=""/>
				</div>
				<div className="text-center">
					<ul className="list-group">
						{tracks}
					</ul>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state){
	return {
		album: state.artist.album
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchTrack}, dispatch);
}

export default connect(mapStateToProps, {fetchTrack})(AlbumDetails);