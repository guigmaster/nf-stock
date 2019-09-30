import React from 'react';

import { Container, Quote, Author } from './styles';

// eslint-disable-next-line react/prop-types
export default function Testimonial({ quote, author }) {
  return (
    <Container>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </Container>
  );
}
