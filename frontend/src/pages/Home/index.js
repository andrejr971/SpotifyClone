import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List, Sections } from './styles';

import Card from '../../components/Card';

import { albumRequest } from '../../store/modules/album/actions';

function Home() {
  const playlists = useSelector((state) => state.playlist.playlists);
  const albums = useSelector((state) => state.album.albums);

  const dispatch = useDispatch();

  useEffect(() => {
    function loadAlbums() {
      dispatch(albumRequest());
    }

    loadAlbums();
  }, [dispatch]);

  return (
    <Container>
      {playlists && (
        <Sections>
          <h2>Playlists</h2>
          <List>
            {playlists.map((playlist) => (
              <Card key={playlist.id} data={playlist} />
            ))}
          </List>
        </Sections>
      )}
      <Sections>
        <h2>Novos lançamentos para você</h2>
        <List>
          {albums.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </List>
      </Sections>
    </Container>
  );
}

export default Home;
