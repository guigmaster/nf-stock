import React from 'react';

import { Container, Quote, Author } from './styles';

export default function Testimonial({ quote, author }) {
  return (
    <Container>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </Container>
  );
}
