import React from 'react';

import { Container, Title, Description, Price, Button } from './styles';

// eslint-disable-next-line react/prop-types
export default function Plan({ type, name, description, value }) {
  return (
    <Container type={type}>
      <Title type={type}>{name}</Title>
      <Description>{description}</Description>
      <Price>{value}</Price>
      <Button to={`/sign?plan=${type}`}>Contratar</Button>
    </Container>
  );
}
