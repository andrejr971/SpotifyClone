import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdSave } from 'react-icons/md';

import InputThumbnail from '../components/InputThumbnail';
import InputCover from '../components/InputCover';

import { Container, Form, Info, Input, Div } from './styles';

import {
  // artistRequest,
  artistNewRequest,
} from '../../../../../store/modules/artists/actions';

function NewArtist() {
  const [name, setName] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [cover, setCover] = useState();

  const dispatch = useDispatch();

  // const artist = useSelector((state) => state.artists.artist);
  // const loading = useSelector((state) => state.artists.loading);

  // useEffect(() => {
  //   function loadArtist() {
  //     dispatch(artistRequest(id, 1));
  //   }

  //   loadArtist();
  // }, [dispatch, id]);

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

    dispatch(artistNewRequest(data));
  }

  function handleName(value) {
    setName(value);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputCover id="cover" onFileUploaded={setCover} />
        <Info>
          <InputThumbnail id="thumbnail" onFileUploaded={setThumbnail} />
          <Div>
            <Input
              type="text"
              name="name"
              placeholder="Nome do Artista"
              onChange={({ target }) => handleName(target.value)}
            />
            <button type="submit">
              <MdSave />
            </button>
          </Div>
        </Info>
      </Form>
    </Container>
  );
}

export default NewArtist;
