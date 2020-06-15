import React from 'react';
import { Link } from 'react-router-dom';

import LineTable from '../../../../components/LineTable';
import { Container, Header } from './styles';

function Album({ data }) {
  return (
    <Container>
      <Header>
        <img src={data.thumbnail} alt="Capa" />
        <Link to={`/album/${data.id}`}>{data.title}</Link>
      </Header>
      <div>
        {data.songs &&
          data.songs.map((song) => (
            <LineTable key={song.id} data={song} playlist={data.songs} />
          ))}
      </div>
    </Container>
  );
}

export default Album;
