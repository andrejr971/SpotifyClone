import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import playlist from './playlist/reducer';
import player from './player/reducer';

export default combineReducers({ auth, user, playlist, player });
