import React from 'react';

import { Container, Content, Button } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Congratulations() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>
            Seja mais que bem vindo a nossa família!
            <span>Estamos sempre dispostos para ajudá-lo.</span>
          </h1>

          <Button to="/">Ir para Home</Button>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
