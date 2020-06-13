import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import InputThumbnail from '../../../components/InputThumbnail';
import InputSong from '../../../components/InputSong';
import { songNewRequest } from '../../../../../../../store/modules/song/actions';

import { Container, Content, GroupDiv } from './styles';

function New({ data: album, onClick, visible }) {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const [song, setSong] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!thumbnail) {
      toast.warn('Escolha uma capa');
      return;
    }

    if (!song) {
      toast.warn('Escolha uma capa');
      return;
    }

    const data = new FormData();

    data.append('title', title);
    data.append('file', thumbnail);
    data.append('song', song);

    dispatch(songNewRequest(data, album.artist.id, album.id));
    handleVisible();
  }

  function handleVisible() {
    onClick();
  }

  return (
    <Container visible={visible}>
      <Content>
        <form onSubmit={handleSubmit}>
          <GroupDiv>
            <InputThumbnail onFileUploaded={setThumbnail} />
            <InputSong onFileUploaded={setSong} />
          </GroupDiv>
          <input
            type="text"
            placeholder="Titulo"
            onChange={({ target }) => setTitle(target.value)}
          />
          <GroupDiv>
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleVisible}>
              Cancelar
            </button>
          </GroupDiv>
        </form>
      </Content>
    </Container>
  );
}

export default New;
