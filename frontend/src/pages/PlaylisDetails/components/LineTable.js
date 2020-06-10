import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdMusicNote, MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

import { playerRequest } from '../../../store/modules/player/actions';

import { Line, Music, Details, Options } from './styles';

function LineTable({ data, playlist }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.player.currentSong);

  function handleVisible() {
    setVisible(!visible);
  }

  function handlePlayer(id) {
    dispatch(playerRequest(id, playlist));
  }

  return (
    <Line
      onMouseEnter={handleVisible}
      onMouseLeave={handleVisible}
      onDoubleClick={() => handlePlayer(data.id)}
      selected={currentSong && currentSong.id === data.id}
      playing={currentSong && data.id === currentSong.id}
    >
      <Music>
        {currentSong && currentSong.id === data.id ? (
          <MdPlayArrow />
        ) : visible ? (
          <MdPlayArrow />
        ) : (
          <MdMusicNote />
        )}
        <Details>
          <h3>{data.title}</h3>
          <div>
            <strong>
              <Link to="/">{data.artist.name}</Link>
            </strong>
            <span>.</span>
            <strong>
              <Link to="/">{data.album.title}</Link>
            </strong>
          </div>
        </Details>
      </Music>
      <Options>
        <button type="button">
          <MdMoreHoriz />
        </button>
      </Options>
    </Line>
  );
}

export default LineTable;
