import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { artistsRequest } from '../../../../store/modules/artists/actions';
import CardArtist from './components/CardArtists';

import { Container, List } from './styles';

function Artists() {
  const artists = useSelector((state) => state.artists.artists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(artistsRequest(0));
  }, []);

  return (
    <Container>
      <List>
        {!!artists &&
          artists.map((artist) => <CardArtist key={artist.id} data={artist} />)}
      </List>
    </Container>
  );
}

export default Artists;
