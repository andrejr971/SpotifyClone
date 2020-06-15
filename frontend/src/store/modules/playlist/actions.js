export function playlistsRequest() {
  return {
    type: '@playlist/PLAYLISTS_REQUEST',
  };
}

export function playlistSuccess(playlists) {
  return {
    type: '@playlist/PLAYLISTS_SUCCESS',
    payload: { playlists },
  };
}

export function playlistIdRequest(id) {
  return {
    type: '@playlist/PLAYLIST_ID_REQUEST',
    payload: { id },
  };
}

export function playlistIdSuccess(playlist) {
  return {
    type: '@playlist/PLAYLIST_ID_SUCCESS',
    payload: { playlist },
  };
}

export function playlistNewRequest(data) {
  return {
    type: '@playlist/PLAYLIST_NEW_REQUEST',
    payload: { data },
  };
}

export function playlistDeleteRequest(id) {
  return {
    type: '@playlist/PLAYLIST_DELETE_REQUEST',
    payload: { id },
  };
}

export function playlistAddSongRequest(playlist, song) {
  return {
    type: '@playlist/PLAYLIST_ADD_SONG_REQUEST',
    payload: { playlist, song },
  };
}

export function playlistRemoveSongRequest(playlist, song) {
  return {
    type: '@playlist/PLAYLIST_REMOVE_SONG_REQUEST',
    payload: { playlist, song },
  };
}
