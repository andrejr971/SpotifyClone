import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { artistsRequest } from '../../../../store/modules/artists/actions';
import CardArtist from './components/CardArtists';

import { Container, List } from './styles';

function Artists() {
  const artists = useSelector((state) => state.artists.artists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(artistsRequest(1));
  }, [dispatch]);

  return (
    <Container>
      <header>
        <Link to="/artist/new">Novo Artista</Link>
      </header>
      <List>
        {!!artists &&
          artists.map((artist) => <CardArtist key={artist.id} data={artist} />)}
      </List>
    </Container>
  );
}

export default Artists;
