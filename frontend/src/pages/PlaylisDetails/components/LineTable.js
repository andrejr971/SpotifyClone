import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdMusicNote, MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

import { playlistRemoveSongRequest } from '../../../store/modules/playlist/actions';
import { playerRequest } from '../../../store/modules/player/actions';

import { Line, Music, Details, Options, NavMore } from './styles';

function LineTable({ data, playlist, playlist_id }) {
  const [visible, setVisible] = useState(false);
  const [visibleMore, setVisibleMore] = useState(false);
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.player.currentSong);

  function handleVisible() {
    setVisible(!visible);
  }

  function handlePlayer(id) {
    dispatch(playerRequest(id, playlist));
  }

  function handleVisibleMore() {
    setVisibleMore(!visibleMore);
  }

  function handleRemoveSong() {
    dispatch(playlistRemoveSongRequest(playlist_id, data.id));
    setVisibleMore(false);
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
        <button type="button" onClick={handleVisibleMore}>
          <MdMoreHoriz />
        </button>
        <NavMore visible={visibleMore}>
          <li>
            <button type="button" onClick={handleRemoveSong}>
              Remover Playlista
            </button>
          </li>
        </NavMore>
      </Options>
    </Line>
  );
}

export default LineTable;
