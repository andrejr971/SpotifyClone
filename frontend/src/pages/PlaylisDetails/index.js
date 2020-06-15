import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

import LineTable from './components/LineTable';

import {
  playlistIdRequest,
  playlistDeleteRequest,
} from '../../store/modules/playlist/actions';

import {
  Container,
  Content,
  Play,
  More,
  Controls,
  DivMore,
  NavMore,
} from './styles';

function PlaylisDetails({ match }) {
  const [visible, setVisible] = useState(false);

  const { id } = match.params;

  const dispatch = useDispatch();

  const playlist = useSelector((state) => state.playlist.playlistDetails);

  useEffect(() => {
    function loadPlaylist() {
      dispatch(playlistIdRequest(id));
    }

    loadPlaylist();
  }, [id, dispatch]);

  function handleVisible() {
    setVisible(!visible);
  }

  function handleDelete() {
    dispatch(playlistDeleteRequest(playlist.id));
  }

  return (
    <Container>
      <header>
        {playlist && (
          <>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${playlist.title}`}
              alt={`capa ${playlist.title}`}
            />
            <div>
              <strong>PLAYLIST</strong>
              <h1>{playlist.title}</h1>
              <small>Múscas: {playlist.songs && playlist.songs.length}</small>
            </div>
          </>
        )}
      </header>
      <Content>
        <Controls>
          <Play type="button">
            <MdPlayArrow />
          </Play>
          <DivMore>
            <More onClick={handleVisible}>
              <MdMoreHoriz />
            </More>
            <NavMore visible={visible}>
              <li>
                <button type="button">Adicionar músicas</button>
              </li>
              <li>
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              </li>
            </NavMore>
          </DivMore>
        </Controls>
        {playlist &&
          playlist.songs &&
          playlist.songs.map((song) => (
            <LineTable
              key={song.id}
              data={song}
              playlist_id={playlist.id}
              playlist={playlist.songs}
            />
          ))}
      </Content>
    </Container>
  );
}

export default PlaylisDetails;
