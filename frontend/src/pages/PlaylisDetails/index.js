import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

import LineTable from './components/LineTable';

import { playlistIdRequest } from '../../store/modules/playlist/actions';

import { Container, Content, Play, More, Controls } from './styles';

function PlaylisDetails({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  const playlist = useSelector((state) => state.playlist.playlistDetails);

  useEffect(() => {
    function loadPlaylist() {
      dispatch(playlistIdRequest(id));
    }

    loadPlaylist();
  }, [id, dispatch]);

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
          <More>
            <MdMoreHoriz />
          </More>
        </Controls>
        {playlist.songs ? (
          playlist.songs.map((song) => (
            <LineTable key={song.id} data={song} playlist={playlist.songs} />
          ))
        ) : (
          <h2>Vazio</h2>
        )}
      </Content>
    </Container>
  );
}

export default PlaylisDetails;
