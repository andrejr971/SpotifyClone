import React from 'react';

import { Container } from './styles';

function Artist({ match }) {
  return (
    <Container>
      <header>
        {/* <img
          src={`https://ui-avatars.com/api/?font-size=0.33&format=svg&bold=true&background=040404&color=fff&name=${match.params.id}`}
          alt={`capa ${match.params.id}`}
        /> */}
        <div>
          <strong>ARTISTA</strong>
          <h1>playlist.title</h1>
        </div>
      </header>
    </Container>
  );
}

export default Artist;
