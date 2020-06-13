import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import InputThumbnail from '../InputThumbnail';
import { albumNewRequest } from '../../../../../../store/modules/album/actions';

import { Container, Content, GroupDiv } from './styles';

function New({ data: id, onClick, visible }) {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!thumbnail) {
      toast.warn('Escolha uma capa');
      return;
    }

    const data = new FormData();

    data.append('title', title);
    data.append('file', thumbnail);

    dispatch(albumNewRequest(data, id));
  }

  function handleVisible() {
    onClick();
  }

  return (
    <Container visible={visible}>
      <Content>
        <form onSubmit={handleSubmit}>
          <InputThumbnail onFileUploaded={setThumbnail} />
          <input
            type="text"
            placeholder="title"
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
