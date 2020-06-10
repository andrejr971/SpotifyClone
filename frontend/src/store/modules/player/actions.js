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

export function playing(position, duration) {
  return {
    type: '@player/SONG_PLAYING',
    payload: { position, duration },
  };
}

export function handlePosition(percent) {
  return {
    type: '@player/HANDLE_POSITION',
    payload: { percent },
  };
}

export function setPosition(percent) {
  return {
    type: '@player/SET_POSITION',
    payload: { percent },
  };
}

export function setVolume(volume) {
  return {
    type: '@player/SET_VOLUME',
    payload: { volume },
  };
}
