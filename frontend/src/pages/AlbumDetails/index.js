import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPlayArrow, MdMoreHoriz } from 'react-icons/md';

import LineTable from './components/LineTable';

import { albumIdRequest } from '../../store/modules/album/actions';

import { Container, Content, Play, More, Controls } from './styles';

function AlbumDetails({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  const album = useSelector((state) => state.album.albumDetails);

  useEffect(() => {
    function loadPlaylist() {
      dispatch(albumIdRequest(id));
    }

    loadPlaylist();
  }, [id, dispatch]);

  return (
    <Container>
      <header>
        {album && (
          <>
            <img src={album.thumbnail} alt={`capa ${album.title}`} />
            <div>
              <strong>ALBUM</strong>
              <h1>{album.title}</h1>
              <Link to={`/artist/${album.artist.id}`}>
                {album.artist && album.artist.name}
              </Link>
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
        {album ? (
          album.songs.map((song) => (
            <LineTable key={song.id} data={song} playlist={album.songs} />
          ))
        ) : (
          <h2>Vazio</h2>
        )}
      </Content>
    </Container>
  );
}

export default AlbumDetails;
