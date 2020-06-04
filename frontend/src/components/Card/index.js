import React, { useState } from 'react';
import { MdPlayArrow } from 'react-icons/md';

import { Container, Play, Content } from './styles';

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
      <Content to={`/playlist/${data.id}`}>
        <img
          src={`https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${data.title}`}
          alt="teste"
        />
        <div>
          <strong>{data.title}</strong>
          <span>De {data.author.name}</span>
        </div>
      </Content>
      <Play type="button" visible={visible} onClick={() => alert(data.id)}>
        <MdPlayArrow />
      </Play>
    </Container>
  );
}

export default Card;
