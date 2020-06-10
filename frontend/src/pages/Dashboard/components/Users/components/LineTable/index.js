import React, { useState } from 'react';

import { MdLock, MdLockOpen /*MdModeEdit*/ } from 'react-icons/md';

import { Container, Profile } from './styles';

function LineTable({ data }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Profile>
        <div>
          <img
            src={
              data.path
                ? data.perfil
                : 'https://api.adorable.io/avatars/60/abott@adorable.png'
            }
            alt={data.name}
          />
        </div>
        <div>
          <h3>{data.name}</h3>

          <h4>{data.email}</h4>
        </div>
      </Profile>
      <div>
        <button
          type="button"
          onMouseEnter={handleVisible}
          onMouseLeave={() => setVisible(false)}
        >
          {data.administrator ? (
            visible ? (
              <MdLock />
            ) : (
              <MdLockOpen color="#1ed760" />
            )
          ) : visible ? (
            <MdLockOpen color="#1ed760" />
          ) : (
            <MdLock />
          )}
        </button>
        {/* <button type="button">
          <MdModeEdit />
        </button> */}
      </div>
    </Container>
  );
}

export default LineTable;
