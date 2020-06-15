import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  playlistSuccess,
  playlistIdSuccess,
  playlistsRequest,
  playlistIdRequest,
} from './actions';

export function* loadPlaylist() {
  const { data } = yield call(api.get, '/user/playlists');

  yield put(playlistSuccess(data));
}

export function* loadPlaylistId({ payload }) {
  const { id } = payload;

  const { data } = yield call(api.get, `/user/playlists/${id}`);

  yield put(playlistIdSuccess(data));
}

export function* newPlaylist({ payload }) {
  const { data } = payload;

  const response = yield call(api.post, `/user/playlists`, data);
  toast.success('Playlist criada');

  history.push(`/playlist/${response.data.id}`);
  yield put(playlistsRequest());
}

export function* deletePlaylist({ payload }) {
  const { id } = payload;

  yield call(api.delete, `/user/playlists/${id}`);
  toast.success('Playlist deletada');

  yield put(playlistsRequest());
  history.push('/home');
}

export function* addSong({ payload }) {
  const { playlist: id, song: song_id } = payload;

  yield call(api.post, `/user/playlists/${id}/${song_id}`);
  toast.success('Música adicionada a playlist');
}

export function* removeSong({ payload }) {
  const { playlist: id, song: song_id } = payload;

  yield call(api.delete, `/user/playlists/${id}/${song_id}`);
  toast.success('Música removida da playlist');

  yield put(playlistIdRequest(id));
}

export default all([
  takeLatest('@playlist/PLAYLISTS_REQUEST', loadPlaylist),
  takeLatest('@playlist/PLAYLIST_ID_REQUEST', loadPlaylistId),
  takeLatest('@playlist/PLAYLIST_NEW_REQUEST', newPlaylist),
  takeLatest('@playlist/PLAYLIST_DELETE_REQUEST', deletePlaylist),
  takeLatest('@playlist/PLAYLIST_ADD_SONG_REQUEST', addSong),
  takeLatest('@playlist/PLAYLIST_REMOVE_SONG_REQUEST', removeSong),
]);
