import React from 'react';
import {Link} from 'react-router-dom';

const CoverList = (props, {match}) => (
	<li key={props.key}>
		<Link to={`/albums/${props.id}`}>
			<img 
				src={props.src}
				className={props.className}
				id={props.id}
				alt={props.alt}
			/>
		</Link>
	</li>
);

export default CoverList;