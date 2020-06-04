import React from 'react';
import { useSelector } from 'react-redux';
import { Container, List, Sections } from './styles';

import Card from '../../components/Card';

function Home() {
  const playlists = useSelector((state) => state.playlist.playlists);

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
          {playlists.map((playlist) => (
            <Card key={playlist.id} data={playlist} />
          ))}
        </List>
      </Sections>
    </Container>
  );
}

export default Home;
