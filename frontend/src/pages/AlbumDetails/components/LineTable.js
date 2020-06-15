import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdMusicNote,
  MdPlayArrow,
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

import { playerRequest } from '../../../store/modules/player/actions';

import { Line, Music, Details, Options } from './styles';

function LineTable({ data, playlist }) {
  const [visible, setVisible] = useState(false);
  const [visibleFavorite, setVisibleFavorite] = useState(false);
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.player.currentSong);

  function handleVisible() {
    setVisible(!visible);
  }

  function handleVisibleFavorite() {
    setVisibleFavorite(!visibleFavorite);
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
              <Link to={`/artist/${data.artist.id}`}>{data.artist.name}</Link>
            </strong>
          </div>
        </Details>
      </Music>
      <Options>
        <div
          onMouseEnter={handleVisibleFavorite}
          onMouseLeave={handleVisibleFavorite}
        >
          {!data.like ? (
            visibleFavorite ? (
              <MdFavorite />
            ) : (
              <MdFavoriteBorder />
            )
          ) : data.like.liked ? (
            visibleFavorite ? (
              <MdFavoriteBorder />
            ) : (
              <MdFavorite />
            )
          ) : visibleFavorite ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )}
        </div>

        <button type="button">
          <MdMoreHoriz />
        </button>
      </Options>
    </Line>
  );
}

export default LineTable;
