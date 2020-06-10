import produce from 'immer';

const INITIAL_STATE = {
  albums: [],
  albumDetails: [],
};

export default function albums(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@album/ALBUM_SUCCESS': {
        draft.albums = action.payload.albums;
        break;
      }
      case '@album/ALBUM_ID_SUCCESS': {
        draft.albumDetails = action.payload.album;
        break;
      }
      default:
        break;
    }
  });
}
