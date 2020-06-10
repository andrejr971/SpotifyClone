import produce from 'immer';
import Sound from 'react-sound';

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PAUSED,
  playlist: [],
  prev: false,
  next: false,
  position: null,
  duration: null,
  positionShown: null,
  volume: 100,
};

export default function player(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@player/PLAYER_SUCCESS': {
        draft.currentSong = action.payload.song;
        draft.playlist = action.payload.playlist;
        draft.status = Sound.status.PLAYING;
        draft.position = 0;

        const currentIndex = draft.playlist.findIndex(
          (song) => song.id === draft.currentSong.id
        );

        const next = draft.playlist[currentIndex + 1];
        const prev = draft.playlist[currentIndex - 1];

        if (next) {
          draft.next = true;
          if (!prev) {
            draft.prev = false;
          }
        }

        if (prev) {
          draft.prev = true;
          if (!next) {
            draft.next = false;
          }
        }

        break;
      }
      case '@player/PLAYING': {
        draft.status = Sound.status.PLAYING;
        break;
      }
      case '@player/PAUSED': {
        draft.status = Sound.status.PAUSED;
        break;
      }
      case '@player/NEXT': {
        const currentIndex = draft.playlist.findIndex(
          (song) => song.id === draft.currentSong.id
        );
        const next = draft.playlist[currentIndex + 1];
        const next2 = draft.playlist[currentIndex + 2];

        if (next) {
          draft.prev = true;

          if (!next2) {
            draft.next = false;
          }

          draft.currentSong = next;
          draft.status = Sound.status.PLAYING;
        } else {
          draft.next = false;
        }

        draft.position = 0;
        break;
      }
      case '@player/PREV': {
        const currentIndex = draft.playlist.findIndex(
          (song) => song.id === draft.currentSong.id
        );
        const prev = draft.playlist[currentIndex - 1];
        const prev2 = draft.playlist[currentIndex - 2];

        if (prev) {
          draft.next = true;
          if (!prev2) {
            draft.prev = false;
          }

          draft.currentSong = prev;
          draft.status = Sound.status.PLAYING;
        }

        draft.position = 0;

        break;
      }
      case '@player/SONG_PLAYING': {
        draft.position = action.payload.position;
        draft.duration = action.payload.duration;
        break;
      }
      case '@player/HANDLE_POSITION': {
        draft.positionShown = draft.duration * action.payload.percent;
        break;
      }
      case '@player/SET_POSITION': {
        draft.position = draft.duration * action.payload.percent;
        draft.positionShown = null;
        break;
      }
      case '@player/SET_VOLUME': {
        draft.volume = action.payload.volume;
        break;
      }
      default:
        break;
    }
  });
}
