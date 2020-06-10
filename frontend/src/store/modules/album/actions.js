export function albumRequest() {
  return {
    type: '@album/ALBUM_REQUEST',
  };
}

export function albumSuccess(albums) {
  return {
    type: '@album/ALBUM_SUCCESS',
    payload: { albums },
  };
}

export function albumIdRequest(id) {
  return {
    type: '@album/ALBUM_ID_REQUEST',
    payload: { id },
  };
}

export function albumIdSuccess(album) {
  return {
    type: '@album/ALBUM_ID_SUCCESS',
    payload: { album },
  };
}
