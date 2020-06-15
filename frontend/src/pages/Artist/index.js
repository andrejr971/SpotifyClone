import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { artistRequest } from '../../store/modules/artists/actions';

import Album from './components/Album';

import { Container, Content, Cover, Perfil } from './styles';

function Artist({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artists.artist);

  useEffect(() => {
    dispatch(artistRequest(id, 0));
  }, [dispatch, id]);

  return (
    <Container>
      {!!artist && (
        <>
          <header>
            <Cover>
              <img src={artist.cover} alt="Capa" />
              <span></span>
            </Cover>
            <Perfil>
              <img
                src={
                  artist.path_thumbnail
                    ? artist.thumbnail
                    : `https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${artist.name}`
                }
                alt={`Thumbnail ${artist.name}`}
              />
              <div>
                <strong>ARTISTA</strong>
                <h1>{artist.name}</h1>
              </div>
            </Perfil>
          </header>
          <Content>
            {artist.albuns &&
              artist.albuns.map((album) => (
                <Album key={album.id} data={album} />
              ))}
          </Content>
        </>
      )}
    </Container>
  );
}

export default Artist;
