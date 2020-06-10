import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import playlist from './playlist/sagas';
import player from './player/sagas';
import album from './album/sagas';
import users from './users/sagas';
import artists from './artists/sagas';

export default function* rootSaga() {
  return yield all([auth, user, playlist, player, album, users, artists]);
}
