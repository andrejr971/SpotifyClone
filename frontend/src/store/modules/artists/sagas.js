import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { artistsSuccess } from './actions';

export function* loadArtists({ payload }) {
  const { type } = payload;

  const { data } = yield call(api.get, '/artists', {
    params: { type },
  });

  yield put(artistsSuccess(data));
}

export default all([takeLatest('@artist/ARTISTS_REQUEST', loadArtists)]);
