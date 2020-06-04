import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Nav, DivContent } from './styles';

function Libary() {
  return (
    <Container>
      <Content>
        <Nav>
          <ul>
            <li>
              <Link to="/" className="active">
                Playlists
              </Link>
            </li>
            <li>
              <Link to="/">Artistas</Link>
            </li>
            <li>
              <Link to="/">Sons Curtidos</Link>
            </li>
          </ul>
        </Nav>
        <DivContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis itaque
          placeat voluptates error quisquam! Fuga, eius dolore, minima nostrum
          at aspernatur cupiditate ut id delectus obcaecati adipisci
          dignissimos, quia facilis!
        </DivContent>
      </Content>
    </Container>
  );
}

export default Libary;
