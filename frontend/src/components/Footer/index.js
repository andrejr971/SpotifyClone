import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sound from 'react-sound';

import { play, pause, next, previus } from '../../store/modules/player/actions';

import Slider from 'rc-slider';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdVolumeUp,
  MdSkipNext,
  MdSkipPrevious,
  MdShuffle,
  MdRepeat,
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

  return (
    <Container>
      {!!player && (
        <Sound
          url={player.currentSong.song}
          playStatus={player.status}
          onFinishedPlaying={handleNext}
          // onPlaying={({ position, duration }) =>
          //   console.tron.log(position, duration)
          // }
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
              <small>{player.currentSong.artist.name}</small>
            </div>
          </Fragment>
        )}
      </Current>
      <Progress>
        <Controls>
          <button type="button">
            <MdShuffle />
          </button>
          {/* <button
            type="button"
            onClick={handlePrev}
            {...(player.prev ? '' : 'disabled')}
          >
            <MdSkipPrevious />
          </button> */}
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
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0 }}
              // value={100}
            />
          </ProgressSlider>
          <span>4:39</span>
        </Time>
      </Progress>
      <Volume>
        <MdVolumeUp />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}

export default Footer;
