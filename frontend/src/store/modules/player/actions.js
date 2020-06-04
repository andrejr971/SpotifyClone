export function playerRequest(id, playlist) {
  return {
    type: '@player/PLAYER_REQUEST',
    payload: { id, playlist },
  };
}

export function playerSuccess(song, playlist) {
  return {
    type: '@player/PLAYER_SUCCESS',
    payload: { song, playlist },
  };
}

export function play() {
  return {
    type: '@player/PLAYING',
  };
}

export function pause() {
  return {
    type: '@player/PAUSED',
  };
}

export function next() {
  return {
    type: '@player/NEXT',
  };
}

export function previus() {
  return {
    type: '@player/PREV',
  };
}

export function playing() {
  return {
    type: '@player/SONG_PLAYING',
  };
}
