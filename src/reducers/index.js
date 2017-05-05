import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums';

const rootReducer = combineReducers({
  artist: AlbumsReducer
});

export default rootReducer;
