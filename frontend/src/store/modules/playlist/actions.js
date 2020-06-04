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
