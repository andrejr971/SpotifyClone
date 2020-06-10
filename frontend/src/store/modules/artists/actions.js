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
