import React from 'react';
import { Link } from 'react-router-dom';

import {
  Brand,
  Container,
  HireBtn,
  NavAuth,
  Navigation,
  Wrapper,
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Brand to="/">NF-Stock</Brand>

        <NavAuth>
          <Link to="/">Entrar</Link>
          <HireBtn to="/">Contratar</HireBtn>
        </NavAuth>

        <Navigation>
          <li>
            <Link to="/">O que fazemos</Link>
          </li>
          <li>
            <Link to="/">Planos</Link>
          </li>
          <li>
            <Link to="/">Depoimentos</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </Navigation>
      </Container>
    </Wrapper>
  );
}
