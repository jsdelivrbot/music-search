import React from 'react';
import ReactPlayer from 'react-player';

const AudioPlayer = (props) => {
	return (
			<ReactPlayer 
				url={props.urlSrc} 
				playing={props.playing} 
				controls={props.controls}
				height={props.height}
				width={props.width}
			/>
		);
};

export default AudioPlayer;
