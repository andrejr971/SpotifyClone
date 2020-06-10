import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdPlayArrow } from 'react-icons/md';

import Card from '../../../../components/Card';

import { Container, YourSongs, Play } from './styles';

function Start() {
  const playlists = useSelector((state) => state.playlist.playlists);

  return (
    <Container>
      <YourSongs>
        <Link to="/your-library?p=my-songs">
          <h1>Músicas Curtidas</h1>
        </Link>
        <Play type="button">
          <MdPlayArrow />
        </Play>
      </YourSongs>
      {playlists.map((playlist) => (
        <Card key={playlist.id} data={playlist} />
      ))}
    </Container>
  );
}

export default Start;
