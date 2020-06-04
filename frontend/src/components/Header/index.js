import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';

import history from '../../services/history';

import { Container, Profile, GroupButton, Options } from './styles';

function Header({ visible: visibleButton }) {
  const [visible, setVisible] = useState(visibleButton);
  const [color, setColor] = useState(false);

  const profile = useSelector((state) => state.user.profile);

  document.addEventListener('scroll', () => {
    var scroll = window.scrollY;

    if (scroll <= 50) {
      setColor(false);
    } else {
      setColor(true);
    }
  });

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
      <Profile>
        <button type="button" onClick={handleVisible}>
          <img src={profile.perfil} alt="foto de perfil" />
          <h2>{profile.name} </h2>
          {visible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        <Options visible={visible}>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/logout">Sair</Link>
          </li>
        </Options>
      </Profile>
    </Container>
  );
}

export default Header;
