const songsReducer = () => {
  return [
    { title: 'Old town road', duration: '3:45' },
    { title: 'Bad bad bad', duration: '4:02' },
    { title: 'All star', duration: '3:03' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
