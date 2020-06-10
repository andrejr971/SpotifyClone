import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Users from './components/Users';
import Artists from './components/Artists';
import Albums from './components/Albums';

import { Container, Content, Nav, DivContent } from './styles';

function Dashboard({ location }) {
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
                to="/dashboard?p=users"
                className={
                  handleClass('users') ? 'active' : !local.p ? 'active' : ''
                }
              >
                Usuários
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard?p=artists"
                className={handleClass('artists') ? 'active' : ''}
              >
                Artistas
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard?p=albums"
                className={handleClass('albums') ? 'active' : ''}
              >
                Albums
              </Link>
            </li>
          </ul>
        </Nav>
        <DivContent>
          {local ? (
            local.p === 'albums' ? (
              <Albums />
            ) : local.p === 'artists' ? (
              <Artists />
            ) : (
              <Users />
            )
          ) : (
            <Users />
          )}
        </DivContent>
      </Content>
    </Container>
  );
}

export default Dashboard;
