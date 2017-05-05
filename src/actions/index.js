import axios from 'axios';

const ROOT_URL = 'https://api.spotify.com/v1/search?';
const TRACK_URL = 'https://api.spotify.com/v1/albums';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_TRACK = 'FETCH_TRACK';

export function fetchAlbums(album){

	const url = `${ROOT_URL}q=${album}&type=album`;

	const request = axios.get(url);

	return {
		type: FETCH_ALBUMS,
		payload: request
	};
}

export function fetchTrack(id){
	const url = `${TRACK_URL}/${id}`;

	const request = axios.get(url);

	return {
		type: FETCH_TRACK,
		payload: request
	};
}