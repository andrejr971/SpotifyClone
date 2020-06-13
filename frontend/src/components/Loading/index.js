import React from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <Container className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default Loading;
