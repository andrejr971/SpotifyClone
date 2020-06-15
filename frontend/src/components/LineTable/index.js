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

import { playerRequest } from '../../store/modules/player/actions';

import ModalPlaylist from '../ModalPlaylist';

import { Line, Music, Details, Options, DivMore, NavMore } from './styles';

function LineTable({ data, playlist }) {
  const [visible, setVisible] = useState(false);
  const [visibleMore, setVisibleMore] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleFavorite, setVisibleFavorite] = useState(false);
  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.player.currentSong);

  function handleVisible() {
    setVisible(!visible);
  }

  function handleVisibleMore() {
    setVisibleMore(!visibleMore);
  }

  function handleVisibleModal() {
    setVisibleModal(!visibleModal);
    setVisibleMore(false);
  }

  function handleVisibleFavorite() {
    setVisibleFavorite(!visibleFavorite);
  }

  function handlePlayer(id) {
    dispatch(playerRequest(id, playlist));
  }

  return (
    <>
      <ModalPlaylist
        song={data.id}
        visible={visibleModal}
        onClick={handleVisibleModal}
      />

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
            {data.artist && (
              <div>
                <strong>
                  <Link to={`/artist/${data.artist.id}`}>
                    {data.artist.name}
                  </Link>
                </strong>
              </div>
            )}
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

          <DivMore>
            <button type="button" onClick={handleVisibleMore}>
              <MdMoreHoriz />
            </button>
            <NavMore visible={visibleMore}>
              <li>
                <button type="button" onClick={handleVisibleModal}>
                  Adicionar a playlist
                </button>
              </li>
            </NavMore>
          </DivMore>
        </Options>
      </Line>
    </>
  );
}

export default LineTable;
