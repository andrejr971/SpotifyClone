import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { albumSuccess, albumIdSuccess } from './actions';

export function* loadAlbums() {
  const { data } = yield call(api.get, '/artist/albums');
  yield put(albumSuccess(data));
}

export function* loadAlbumId({ payload }) {
  const { id } = payload;

  const { data } = yield call(api.get, `/artist/albums/${id}`);

  yield put(albumIdSuccess(data));
}

export default all([
  takeLatest('@album/ALBUM_REQUEST', loadAlbums),
  takeLatest('@album/ALBUM_ID_REQUEST', loadAlbumId),
]);
