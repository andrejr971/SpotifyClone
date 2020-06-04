import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { playlistSuccess, playlistIdSuccess } from './actions';

export function* loadPlaylist() {
  const { data } = yield call(api.get, '/user/playlists');

  yield put(playlistSuccess(data));
}

export function* loadPlaylistId({ payload }) {
  const { id } = payload;

  const { data } = yield call(api.get, `/user/playlists/${id}`);

  yield put(playlistIdSuccess(data));
}

export default all([
  takeLatest('@playlist/PLAYLISTS_REQUEST', loadPlaylist),
  takeLatest('@playlist/PLAYLIST_ID_REQUEST', loadPlaylistId),
]);
