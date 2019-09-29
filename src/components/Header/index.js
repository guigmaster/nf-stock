import React from 'react';
import { Link } from 'react-router-dom';

import {
  Brand,
  Container,
  HireBtn,
  NavAuth,
  Navigation,
  Wrapper,
  NavLink,
} from './styles';

export default function Header() {
  const handleClick = id => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <Container>
        <Brand to="/">NF-Stock</Brand>

        <NavAuth>
          <Link to="/">Entrar</Link>
          <HireBtn to="/">Contratar</HireBtn>
        </NavAuth>

        <Navigation>
          {/* <li>
            <a href="#t">O que fazemos</a>
          </li> */}
          <li>
            <NavLink onClick={() => handleClick('plans')}>Planos</NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleClick('testimonials')}>
              Depoimentos
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleClick('contact')}>Contato</NavLink>
          </li>
        </Navigation>
      </Container>
    </Wrapper>
  );
}
