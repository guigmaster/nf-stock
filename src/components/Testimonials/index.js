import React from 'react';

import { Container, List, Title, Wrapper } from './styles';

import Testimonial from './Testimonial';

export default function Testimonials() {
  const quote =
    'Um escritório contábil precisa de um software moderno, eficiente e descomplicado para a execução dos lançamentos e fechamentos da rotina contábil e, essencialmente, um excelente suporte técnico. Este conjunto de predicados primordiais tem nome: Alterdata. Temos a felicidade e a satisfação de mencionar aos nossos clientes que somos parceiros desta conceituada empresa! Contabilidade.';

  const author = 'Contabilidade Ailson Lombardi - Ailson Lombardi - MG';

  return (
    <Wrapper id="testimonials">
      <Container>
        <Title>Veja alguns depoimentos</Title>
        <List>
          {[...Array(3)].map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Testimonial key={i} quote={quote} author={author} />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
}
