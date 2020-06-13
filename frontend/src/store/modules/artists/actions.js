export function artistsRequest(type) {
  return {
    type: '@artist/ARTISTS_REQUEST',
    payload: { type },
  };
}

export function artistsSuccess(artists) {
  return {
    type: '@artist/ARTISTS_SUCCESS',
    payload: { artists },
  };
}

export function artistRequest(id, type) {
  return {
    type: '@artist/ARTIST_REQUEST',
    payload: { id, type },
  };
}

export function artistNewRequest(data) {
  return {
    type: '@artist/ARTIST_NEW_REQUEST',
    payload: { data },
  };
}

export function artistSuccess(artist) {
  return {
    type: '@artist/ARTIST_SUCCESS',
    payload: { artist },
  };
}

export function artistUpdateRequest(data, id) {
  return {
    type: '@artist/ARTIST_UPDATE_REQUEST',
    payload: { data, id },
  };
}
