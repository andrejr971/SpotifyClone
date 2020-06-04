import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { playerSuccess } from './actions';

export function* loadSong({ payload }) {
  const { id, playlist } = payload;
  const { data } = yield call(api.get, `/artist/albums/songs/${id}`);

  yield put(playerSuccess(data, playlist));
}

export default all([takeLatest('@player/PLAYER_REQUEST', loadSong)]);
