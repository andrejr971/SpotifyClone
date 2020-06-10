import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import playlist from './playlist/reducer';
import player from './player/reducer';
import album from './album/reducer';
import users from './users/reducer';
import artists from './artists/reducer';

export default combineReducers({
  auth,
  user,
  playlist,
  player,
  album,
  users,
  artists,
});
