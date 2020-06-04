import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      default:
        break;
    }
  });
}
