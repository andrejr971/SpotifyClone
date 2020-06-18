import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { userUpdateSuccess } from './actions';

export function* updateUser({ payload }) {
  const { profile } = payload;

  const { data } = yield call(api.put, '/users', profile);

  toast.success('Perfil atualizado com sucesso');
  yield put(userUpdateSuccess(data));
}

export default all([takeLatest('@user/USER_UPDATE_REQUEST', updateUser)]);
