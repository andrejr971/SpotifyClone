import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';

function LayoutDefault({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [children]);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Header visible={visible} />
        <main>{children}</main>
      </Content>
      <Footer />
    </Container>
  );
}

export default LayoutDefault;
