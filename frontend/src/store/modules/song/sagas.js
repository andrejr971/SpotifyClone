import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { albumIdRequest } from '../album/actions';

export function* newMusic({ payload }) {
  const { data, artist_id, album_id } = payload;

  yield call(api.post, `/artist/albums/songs/${artist_id}/${album_id}`, data);

  toast.success('Música adicionada com sucesso');
  yield put(albumIdRequest(album_id));
}

export function* deleteMusic({ payload }) {
  const { id, album_id } = payload;
  yield call(api.delete, `/artist/albums/songs/${id}`);

  toast.success('Música deletada com sucesso');
  yield put(albumIdRequest(album_id));
}

export default all([
  takeLatest('@song/SONG_NEW_REQUEST', newMusic),
  takeLatest('@song/SONG_DELETE_REQUEST', deleteMusic),
]);
