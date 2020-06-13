import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';

import { Container, Play, Content, Description } from './styles';

function Card({ data }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container
      onMouseEnter={handleVisible}
      onMouseLeave={() => setVisible(false)}
    >
      <Content to={`/album/edit/${data.id}`}>
        <img
          src={
            data.thumbnail
              ? data.thumbnail
              : `https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${data.title}`
          }
          alt={`Capa ${data.title}`}
        />
        <Play type="button" visible={visible}>
          <span>
            <MdEdit />
          </span>
        </Play>
      </Content>
      <Description>
        <strong>{data.title}</strong>
      </Description>
    </Container>
  );
}

export default Card;
