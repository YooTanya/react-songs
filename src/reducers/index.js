import { combineReducers } from 'redux';
const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '1:20' },
		{ title: 'All star', duration: '3:28' },
		{ title: 'My humps', duration: '2:35' },		
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type==='SONG_SELECTED'){
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})