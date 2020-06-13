export function songNewRequest(data, artist_id, album_id) {
  return {
    type: '@song/SONG_NEW_REQUEST',
    payload: { data, artist_id, album_id },
  };
}

export function songDeleteRequest(id, album_id) {
  return {
    type: '@song/SONG_DELETE_REQUEST',
    payload: { id, album_id },
  };
}
