import produce from 'immer';

const INITIAL_STATE = {
  artists: null,
  artist: null,
  loading: false,
};

export default function artists(state = INITIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@artist/ARTISTS_SUCCESS': {
        draft.artists = actions.payload.artists;
        draft.loading = false;
        break;
      }
      case '@artist/ARTIST_REQUEST': {
        draft.artist = null;
        draft.loading = true;
        break;
      }
      case '@artist/ARTIST_SUCCESS': {
        draft.loading = false;
        draft.artist = actions.payload.artist;
        break;
      }
      default:
    }
  });
}
