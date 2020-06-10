import produce from 'immer';

const INITIAL_STATE = {
  artists: null,
};

export default function artists(state = INITIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@artist/ARTISTS_SUCCESS': {
        draft.artists = actions.payload.artists;
        break;
      }
      default:
    }
  });
}
