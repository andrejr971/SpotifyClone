import React, { useState, useEffect } from 'react';
import { Container } from './styles';

function Line({ data, onClick, clicked }) {
  const [selected, setSelected] = useState(false);

  function handleClicked() {
    onClick(data.id);
  }

  useEffect(() => {
    clicked === data.id ? setSelected(true) : setSelected(false);
  }, [clicked, data.id, selected]);

  return (
    <Container clicked={selected} onClick={handleClicked}>
      {data.title}
    </Container>
  );
}

export default Line;
