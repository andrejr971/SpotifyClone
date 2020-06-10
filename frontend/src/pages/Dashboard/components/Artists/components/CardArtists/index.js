import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

import { Container, Play, Content, Description } from './styles';

function CardArtist({ data }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container
      onMouseEnter={handleVisible}
      onMouseLeave={() => setVisible(false)}
    >
      <Content to={`/artist/edit/${data.id}`}>
        <img
          src={
            data.thumbnail
              ? data.thumbnail
              : `https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${data.name}`
          }
          alt={`Capa ${data.name}`}
        />
      </Content>
      <Description>
        <strong>{data.name}</strong>
      </Description>
      <Play type="button" visible={visible} to={`/artist/edit/${data.id}`}>
        <MdEdit />
      </Play>
    </Container>
  );
}

export default CardArtist;
