import produce from 'immer';

const INITIAL_STATE = {
  users: [],
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@users/USERS_SUCCESS': {
        draft.users = action.payload.users;
        break;
      }
      default:
        break;
    }
  });
}
