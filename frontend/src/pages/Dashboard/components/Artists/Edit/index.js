import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSave } from 'react-icons/md';

import Loading from '../../../../../components/Loading';

import CardAlbums from './components/CardAlbums';
import InputThumbnail from '../components/InputThumbnail';
import InputCover from '../components/InputCover';

import ModalNewAlbum from '../../Albums/components/New';

import {
  Container,
  Content,
  List,
  Form,
  Info,
  Input,
  Div,
  ContentLoading,
} from './styles';

import {
  artistRequest,
  artistUpdateRequest,
} from '../../../../../store/modules/artists/actions';

function Edit({ match }) {
  const [name, setName] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [cover, setCover] = useState();
  const [visible, setVisible] = useState(false);

  const { id } = match.params;

  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artists.artist);
  const loading = useSelector((state) => state.artists.loading);

  useEffect(() => {
    function loadArtist() {
      dispatch(artistRequest(id, 1));
    }

    loadArtist();
  }, [dispatch, id]);

  useEffect(() => {
    if (artist !== null) {
      setName(artist.name);
    }
  }, [artist]);

  function handleVisible() {
    setVisible(!visible);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('name', name);
    if (thumbnail) {
      data.append('thumbnail', thumbnail);
    }

    if (cover) {
      data.append('cover', cover);
    }
    dispatch(artistUpdateRequest(data, artist.id));
  }

  return (
    <Container>
      {loading ? (
        <ContentLoading>
          <Loading />
        </ContentLoading>
      ) : (
        !!artist && (
          <>
            <ModalNewAlbum
              data={artist.id}
              visible={visible}
              onClick={handleVisible}
            />
            <Form onSubmit={handleSubmit}>
              <InputCover data={artist} id="cover" onFileUploaded={setCover} />
              <Info>
                <InputThumbnail
                  data={artist}
                  id="thumbnail"
                  onFileUploaded={setThumbnail}
                />
                <Div>
                  <Input
                    html={name ? name : ''}
                    id="name"
                    onChange={({ target }) => setName(target.value)}
                  />
                  <button type="submit">
                    <MdSave />
                  </button>
                </Div>
              </Info>
            </Form>
            <Content>
              <header>
                <button type="button" onClick={handleVisible}>
                  Novo Album
                </button>
              </header>
              {artist.albuns.length > 0 && (
                <List>
                  <h2>Albuns/ Singles e EPs</h2>

                  {artist.albuns.map((album) => (
                    <CardAlbums key={album.id} data={album} />
                  ))}
                </List>
              )}
            </Content>
          </>
        )
      )}
    </Container>
  );
}

export default Edit;
