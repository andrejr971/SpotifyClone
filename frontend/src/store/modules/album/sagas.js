import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { albumSuccess, albumIdSuccess, albumUpdateSuccess } from './actions';

export function* loadAlbums() {
  const { data } = yield call(api.get, '/artist/albums');
  yield put(albumSuccess(data));
}

export function* loadAlbumId({ payload }) {
  const { id } = payload;

  const { data } = yield call(api.get, `/artist/albums/${id}`);

  yield put(albumIdSuccess(data));
}

export function* newAlbum({ payload }) {
  const { data, id } = payload;

  const response = yield call(api.post, `/artist/albums/${id}`, data);

  toast.success('Novo album criado');
  history.push(`/album/edit/${response.data.id}`);
}

export function* updateAlbum({ payload }) {
  const { data, id } = payload;

  const response = yield call(api.put, `/artist/albums/${id}`, data);

  toast.success('Album atualizado criado');

  yield put(albumUpdateSuccess(response.data));
}

export default all([
  takeLatest('@album/ALBUM_REQUEST', loadAlbums),
  takeLatest('@album/ALBUM_ID_REQUEST', loadAlbumId),
  takeLatest('@album/ALBUM_NEW_REQUEST', newAlbum),
  takeLatest('@album/ALBUM_UPDATE_REQUEST', updateAlbum),
]);
