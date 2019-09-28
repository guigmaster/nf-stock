import React from 'react';

import { Container, Title, Description, Price, Button } from './styles';

export default function Plan({ type, name, description, value }) {
  return (
    <Container type={type}>
      <Title type={type}>{name}</Title>
      <Description>{description}</Description>
      <Price>{value}</Price>
      <Button to="/">Contratar</Button>
    </Container>
  );
}
