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

// eslint-disable-next-line react/prop-types
export default function Header({ hasNavigation }) {
  const handleClick = id => {
    document
      .getElementById(id)
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <Wrapper hasNavigation={hasNavigation}>
      <Container>
        <Brand to="/">NF-Stock</Brand>

        {hasNavigation && (
          <NavAuth>
            <HireBtn to="/sign">Contratar</HireBtn>
          </NavAuth>
        )}

        {hasNavigation && (
          <Navigation>
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
