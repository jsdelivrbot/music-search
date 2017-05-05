import { FETCH_ALBUMS } from '../actions/index';
import { FETCH_TRACK } from '../actions/index';

const INITIAL_STATE = { all: [], album: {}};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_ALBUMS: 
			return {...state, all: action.payload.data.albums.items};
			//or other pattern {...state, all: action.payload.data.albums.items}
		case FETCH_TRACK:
			return {...state, album: action.payload.data};
		default:
			return state;
	}
}