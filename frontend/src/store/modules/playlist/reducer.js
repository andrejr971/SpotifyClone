import produce from 'immer';

const INITIAL_STATE = {
  playlists: [],
  playlistDetails: [],
};

export default function playlist(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@playlist/PLAYLISTS_SUCCESS': {
        draft.playlists = action.payload.playlists;
        break;
      }
      case '@playlist/PLAYLIST_ID_REQUEST': {
        draft.playlistDetails = [];
        break;
      }
      case '@playlist/PLAYLIST_ID_SUCCESS': {
        draft.playlistDetails = action.payload.playlist;
        break;
      }
      default:
        break;
    }
  });
}
