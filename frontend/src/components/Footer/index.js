import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Sound from 'react-sound';

import {
  play,
  pause,
  next,
  previus,
  playing,
  handlePosition,
  setPosition,
  setVolume,
} from '../../store/modules/player/actions';

import Slider from 'rc-slider';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdVolumeUp,
  MdSkipNext,
  MdSkipPrevious,
  MdShuffle,
  MdRepeat,
  MdVolumeOff,
  MdVolumeDown,
} from 'react-icons/md';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './styles';

function Footer() {
  const player = useSelector((state) => state.player);
  const position = useSelector((state) => msToTime(state.player.position));
  const duration = useSelector((state) => msToTime(state.player.duration));
  const positionShown = useSelector((state) =>
    msToTime(state.player.positionShown)
  );

  const progress = useSelector(
    (state) =>
      (state.player.positionShown || state.player.position) *
        (1000 / state.player.duration) || 0
  );

  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(play());
  }

  function handlePause() {
    dispatch(pause());
  }

  function handleNext() {
    dispatch(next());
  }

  function handlePrev() {
    dispatch(previus());
  }

  function msToTime(duration) {
    if (!duration) return null;

    let seconds = parseInt((duration / 1000) % 60, 10);
    let minutes = parseInt((duration / (1000 * 60)) % 60, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }

  function handlePositionFunc(value) {
    dispatch(handlePosition(value / 1000));
  }

  function setPositionFunc(value) {
    dispatch(setPosition(value / 1000));
  }

  function handleVolume(value) {
    dispatch(setVolume(value));
  }

  return (
    <Container>
      {!!player && player.currentSong && (
        <Sound
          url={player.currentSong.song}
          playStatus={player.status}
          onFinishedPlaying={handleNext}
          onPlaying={({ position, duration }) =>
            dispatch(playing(position, duration))
          }
          position={player.position}
          volume={player.volume}
        />
      )}
      <Current>
        {!!player.currentSong && (
          <Fragment>
            <img
              src={player.currentSong.thumbnail}
              alt={`thumbnail ${player.currentSong.title}`}
            />
            <div>
              <span>{player.currentSong.title}</span>
              <Link to={`/artist/${player.currentSong.artist.id}`}>
                {player.currentSong.artist.name}
              </Link>
            </div>
          </Fragment>
        )}
      </Current>
      <Progress>
        <Controls>
          <button type="button">
            <MdShuffle />
          </button>
          {!!player && player.prev ? (
            <button type="button" onClick={handlePrev}>
              <MdSkipPrevious />
            </button>
          ) : (
            <button
              type="button"
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
              disabled
            >
              <MdSkipPrevious />
            </button>
          )}
          {!!player.currentSong && player.status === Sound.status.PLAYING ? (
            <button type="button" onClick={handlePause}>
              <MdPauseCircleOutline size={40} />
            </button>
          ) : (
            <button type="button" onClick={handlePlay}>
              <MdPlayCircleOutline size={40} />
            </button>
          )}
          {!!player && player.next ? (
            <button type="button" onClick={handleNext}>
              <MdSkipNext />
            </button>
          ) : (
            <button
              type="button"
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
              disabled
            >
              <MdSkipNext />
            </button>
          )}

          <button type="button">
            <MdRepeat />
          </button>
        </Controls>

        <Time>
          <span>{positionShown || position}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0 }}
              max={1000}
              onChange={(value) => handlePositionFunc(value)}
              onAfterChange={(value) => setPositionFunc(value)}
              value={progress}
            />
          </ProgressSlider>
          <span>{!!duration && duration}</span>
        </Time>
      </Progress>
      <Volume>
        {!!player && player.volume >= 50 ? (
          <MdVolumeUp />
        ) : player.volume < 49 && player.volume > 0 ? (
          <MdVolumeDown />
        ) : (
          <MdVolumeOff />
        )}
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={player.volume}
          onChange={(value) => handleVolume(value)}
        />
      </Volume>
    </Container>
  );
}

export default Footer;
