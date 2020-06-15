import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playlistAddSongRequest } from '../../store/modules/playlist/actions';

import Line from './components/Line';

import { Container, Content, GroupDiv } from './styles';

function ModalPlaylist({ song, visible, onClick }) {
  const [selected, setSelect] = useState();
  const dispatch = useDispatch();

  function handleSelected(id) {
    setSelect(id);
  }

  function handleVisible() {
    onClick();
  }

  function handleAdd() {
    dispatch(playlistAddSongRequest(selected, song));
    handleVisible();
  }

  const playlists = useSelector((state) => state.playlist.playlists);

  return (
    <Container visible={visible}>
      <Content>
        <div>
          <ul>
            {!!playlists &&
              playlists.map((playlist) => (
                <Line
                  key={playlist.id}
                  data={playlist}
                  clicked={selected}
                  onClick={() => handleSelected(playlist.id)}
                />
              ))}
          </ul>
          <GroupDiv>
            <button type="button" onClick={handleAdd}>
              Adicionar
            </button>
            <button type="button" onClick={handleVisible}>
              Cancelar
            </button>
          </GroupDiv>
        </div>
      </Content>
    </Container>
  );
}

export default ModalPlaylist;
