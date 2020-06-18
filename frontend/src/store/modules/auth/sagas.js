import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { singInSuccess, singUpSuccess, singFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const { data } = yield call(api.post, '/session', { email, password });
    const { token, user } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));
    toast.success('Logado com sucesso');
    history.push('/home');
  } catch (err) {
    toast.error('Verifique os seus dados');
    yield put(singFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    console.tron.log(payload);
    yield call(api.post, '/register', {
      name,
      email,
      password,
    });

    toast.success('Cadastro com sucesso, faça o login para continuar');

    yield put(singUpSuccess());
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(singFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
