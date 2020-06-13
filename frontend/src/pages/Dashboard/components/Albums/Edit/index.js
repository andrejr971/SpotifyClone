import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSave } from 'react-icons/md';

import LineTable from './components/LineTable/index';
import InputThumbnail from '../components/InputThumbnail';
import NewMusic from './components/NewMusic';

import {
  albumIdRequest,
  albumUpdateRequest,
} from '../../../../../store/modules/album/actions';

import { Container, Content, FormGroup, DivContent } from './styles';

function Edit({ match }) {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState();
  const [visible, setVisible] = useState(false);

  const { id } = match.params;

  const dispatch = useDispatch();

  const album = useSelector((state) => state.album.albumDetails);

  useEffect(() => {
    function loadPlaylist() {
      dispatch(albumIdRequest(id));
    }

    loadPlaylist();
  }, [id, dispatch]);

  useEffect(() => {
    if (album) setTitle(album.title);
  }, [album]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('title', title);

    if (thumbnail) {
      data.append('file', thumbnail);
    }

    dispatch(albumUpdateRequest(data, id));
  }

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <header>
        {album && (
          <>
            <NewMusic visible={visible} onClick={handleVisible} data={album} />
            <form onSubmit={handleSubmit}>
              <InputThumbnail data={album} onFileUploaded={setThumbnail} />
              <FormGroup>
                <input
                  type="text"
                  placeholder="titulo"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
                <button type="submit">
                  <MdSave />
                </button>
              </FormGroup>
            </form>
          </>
        )}
      </header>
      <Content>
        <DivContent>
          <button type="button" onClick={handleVisible}>
            Novo música
          </button>
        </DivContent>
        {album &&
          album.songs.map((song) => (
            <LineTable key={song.id} data={song} playlist={album.songs} />
          ))}
      </Content>
    </Container>
  );
}

export default Edit;
