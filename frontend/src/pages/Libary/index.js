import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Start from './components/Start';
import Artists from './components/Artists';
import Songs from './components/Songs';

import { Container, Content, Nav, DivContent } from './styles';

function Libary({ location }) {
  const local = queryString.parse(location.search);

  function handleClass(value) {
    if (value === local.p) {
      return true;
    }

    return false;
  }

  return (
    <Container>
      <Content>
        <Nav>
          <ul>
            <li>
              <Link
                to="/your-library?p=playlists"
                className={
                  handleClass('playlists') ? 'active' : !local.p ? 'active' : ''
                }
              >
                Playlists
              </Link>
            </li>
            <li>
              <Link
                to="/your-library?p=my-artists"
                className={handleClass('my-artists') ? 'active' : ''}
              >
                Artistas
              </Link>
            </li>
            <li>
              <Link
                to="/your-library?p=my-songs"
                className={handleClass('my-songs') ? 'active' : ''}
              >
                Sons Curtidos
              </Link>
            </li>
          </ul>
        </Nav>
        <DivContent>
          {local ? (
            local.p === 'my-songs' ? (
              <Songs />
            ) : local.p === 'my-artists' ? (
              <Artists />
            ) : (
              <Start />
            )
          ) : (
            <Start />
          )}
        </DivContent>
      </Content>
    </Container>
  );
}

export default Libary;
