import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';

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
      <Content
        to={data.thumbnail ? `/album/${data.id}` : `/playlist/${data.id}`}
      >
        <img
          src={
            data.thumbnail
              ? data.thumbnail
              : `https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${data.title}`
          }
          alt={`Capa ${data.title}`}
        />
      </Content>
      <Description>
        <strong>{data.title}</strong>
        {data.artist ? (
          <Link to={`/artist/${data.artist.id}`}>{data.artist.name}</Link>
        ) : (
          data.author && <span>De {data.author.name}</span>
        )}
      </Description>
      <Play type="button" visible={visible} onClick={() => alert(data.id)}>
        <MdPlayArrow />
      </Play>
    </Container>
  );
}

export default Card;
