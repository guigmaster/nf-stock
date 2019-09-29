import React from 'react';

import {
  Brand,
  Container,
  HireBtn,
  NavAuth,
  Navigation,
  Wrapper,
  NavLink,
} from './styles';

export default function Header({ hasNavigation }) {
  const handleClick = id => {
    document
      .getElementById(id)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <Container>
        <Brand to="/">NF-Stock</Brand>

        {hasNavigation && (
          <NavAuth>
            <HireBtn to="/">Contratar</HireBtn>
          </NavAuth>
        )}

        {hasNavigation && (
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
        )}
      </Container>
    </Wrapper>
  );
}
