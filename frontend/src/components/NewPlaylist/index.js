import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, Content, GroupDiv } from './styles';

import { playlistNewRequest } from '../../store/modules/playlist/actions';

function NewPlaylist({ visible, onClick }) {
  const dispatch = useDispatch();

  function handleVisible() {
    onClick();
  }

  function handleSubmit(data) {
    dispatch(playlistNewRequest(data));
    handleVisible();
  }

  return (
    <Container visible={visible}>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h2>Nova Playlist</h2>
          <Input
            placeholder="Título"
            name="title"
            autoComplete="off"
            required
          />
          <Input
            placeholder="Descrição"
            name="description"
            multiline
            rows={4}
            autoComplete="off"
          />
          <GroupDiv>
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleVisible}>
              Cancelar
            </button>
          </GroupDiv>
        </Form>
      </Content>
    </Container>
  );
}

export default NewPlaylist;
