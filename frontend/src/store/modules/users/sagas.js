import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { usersSuccess } from './actions';

export function* loadUsers() {
  const { data } = yield call(api.get, '/users');

  yield put(usersSuccess(data));
}

export default all([takeLatest('@users/USERS_REQUEST', loadUsers)]);
