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

export function albumNewRequest(data, id) {
  return {
    type: '@album/ALBUM_NEW_REQUEST',
    payload: { data, id },
  };
}

export function albumUpdateRequest(data, id) {
  return {
    type: '@album/ALBUM_UPDATE_REQUEST',
    payload: { data, id },
  };
}

export function albumUpdateSuccess(data) {
  return {
    type: '@album/ALBUM_UPDATE_SUCCESS',
    payload: { data },
  };
}
