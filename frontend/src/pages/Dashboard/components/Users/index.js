import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { usersRequest } from '../../../../store/modules/users/actions';

import LineTable from './components/LineTable';
import NewUser from './components/NewUser';

import { Container, List, Pop } from './styles';

function Users() {
  const [visible, setVisible] = useState(false);
  const [visiblePop, setVisiblePop] = useState(false);
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    function loadUsers() {
      dispatch(usersRequest());
    }

    loadUsers();
  }, [dispatch]);

  function handleVisible() {
    setVisible(!visible);
  }

  function handleVisiblePop() {
    setVisiblePop(!visiblePop);
  }

  return (
    <Container>
      <header>
        <button
          type="button"
          onClick={handleVisible}
          onMouseEnter={handleVisiblePop}
          onMouseLeave={handleVisiblePop}
        >
          Novo Administrador
        </button>
        <Pop visible={visiblePop}>
          <span>Ctrl+Enter</span>
        </Pop>
      </header>
      <List>
        {!!users &&
          users.map((user) => <LineTable key={user.id} data={user} />)}
      </List>

      <NewUser visible={visible} onClick={handleVisible} />
    </Container>
  );
}

export default Users;
