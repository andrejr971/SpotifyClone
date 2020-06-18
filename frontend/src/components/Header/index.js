import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';

import history from '../../services/history';

import { logout } from '../../store/modules/auth/actions';

import { Container, Profile, GroupButton, Options } from './styles';

function Header({ visible: visibleButton }) {
  const [visible, setVisible] = useState(visibleButton);
  const [color, setColor] = useState(false);

  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  document.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    if (scroll <= 50) {
      setColor(false);
    } else {
      setColor(true);
    }
  });

  function handleLogout() {
    dispatch(logout());
  }

  function handleVisible() {
    setVisible(!visible);
  }

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.goForward();
  }

  return (
    <Container visible={color}>
      <GroupButton>
        <button type="button" onClick={goBack}>
          <MdKeyboardArrowLeft />
        </button>
        <button type="button" onClick={goNext}>
          <MdKeyboardArrowRight />
        </button>
      </GroupButton>
      <Profile id="options">
        <button type="button" onClick={handleVisible}>
          <img
            src={
              profile.path
                ? profile.perfil
                : 'https://api.adorable.io/avatars/100/abott@adorable.png'
            }
            alt="foto de perfil"
          />
          <h2>{profile.name} </h2>
          {visible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        <Options visible={visible}>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </li>
        </Options>
      </Profile>
    </Container>
  );
}

export default Header;
