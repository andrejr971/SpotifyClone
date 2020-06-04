import produce from 'immer';
import Sound from 'react-sound';

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PAUSED,
  playlist: [],
  prev: false,
  next: false,
};

export default function player(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@player/PLAYER_SUCCESS': {
        draft.currentSong = action.payload.song;
        draft.playlist = action.payload.playlist;
        draft.status = Sound.status.PLAYING;

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

        console.tron.log(draft.next, draft.prev);
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

        break;
      }
      // case '@player/SONG_PLAYING': {
      //   const currentIndex = draft.playlist.findIndex(
      //     (song) => song.id === draft.currentSong.id
      //   );
      //   const prev = draft.playlist[currentIndex - 1];

      //   if (prev) {
      //     draft.currentSong = prev;
      //     draft.status = Sound.status.PLAYING;
      //   }
      //   break;
      // }
      default:
        break;
    }
  });
}
