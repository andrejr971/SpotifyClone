import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { artistsSuccess, artistSuccess } from './actions';

export function* loadArtists({ payload }) {
  const { type } = payload;

  const { data } = yield call(api.get, '/artists', {
    params: { type },
  });

  yield put(artistsSuccess(data));
}

export function* loadArtist({ payload }) {
  const { id, type } = payload;

  const { data } = yield call(api.get, `/artists/${id}`, {
    params: { type },
  });

  yield put(artistSuccess(data));
}

export function* newArtist({ payload }) {
  const { data } = payload;

  yield call(api.post, `/artists`, data);

  toast.success('Novo artista criado');
  history.push('/dashboard?p=artists');
}

export function* updateArtist({ payload }) {
  const { data, id } = payload;

  yield call(api.put, `/artists/${id}`, data, {
    params: { type: 1 },
  });

  toast.success('Artista atualizado');
}

export default all([
  takeLatest('@artist/ARTISTS_REQUEST', loadArtists),
  takeLatest('@artist/ARTIST_REQUEST', loadArtist),
  takeLatest('@artist/ARTIST_NEW_REQUEST', newArtist),
  takeLatest('@artist/ARTIST_UPDATE_REQUEST', updateArtist),
]);
