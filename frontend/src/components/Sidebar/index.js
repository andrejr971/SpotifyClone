import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdHome, MdSearch, MdDashboard, MdAdd } from 'react-icons/md';
import { IoIosAlbums } from 'react-icons/io';

import { Container, Nav, NavGroup, Playlist, ULPlaylist } from './styles';

import { playlistsRequest } from '../../store/modules/playlist/actions';

import logo from '../../assets/images/icon.png';

function HandleSidebar(active, to) {
  let match = useRouteMatch({
    path: to,
    exact: active,
  });

  return match ? 'active' : '';
}

function Sidebar() {
  const dispatch = useDispatch();

  const playlists = useSelector((state) => state.playlist.playlists);

  useEffect(() => {
    function loadPlaylists() {
      dispatch(playlistsRequest());
    }

    loadPlaylists();
  }, [dispatch]);

  return (
    <Container>
      <Link to="/home">
        <img src={logo} alt="Logo Spotify" />
      </Link>

      <Nav>
        <NavGroup>
          <li>
            <Link to="/home" className={HandleSidebar(true, '/home')}>
              <MdHome />
              <span>Início</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className={HandleSidebar(false, '/search')}>
              <MdSearch />
              <span>Buscar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/your-library"
              className={HandleSidebar(false, '/your-library')}
            >
              <IoIosAlbums />
              <span>Sua Biblioteca</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={HandleSidebar(false, '/dashboard')}
            >
              <MdDashboard />
              <span>Administrador</span>
            </Link>
          </li>
        </NavGroup>
      </Nav>
      <Playlist>
        <div>
          <h3>PLAYLISTS</h3>
          <button type="button">
            <span>
              <MdAdd />
            </span>
            Criar playlist
          </button>
        </div>
        <ULPlaylist>
          <ul>
            {playlists &&
              playlists.map((playlist) => (
                <li
                  key={playlist.id}
                  className={HandleSidebar(true, `/playlist/${playlist.id}`)}
                >
                  <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link>
                </li>
              ))}
          </ul>
        </ULPlaylist>
      </Playlist>
    </Container>
  );
}

export default Sidebar;
