import React from 'react';

import { Container, Wrapper, Title, Subtitle, Plans } from './styles';

import Plan from '../Plan';

export default function SectionPlan() {
  const plansList = [
    {
      type: '1',
      name: 'Basic',
      description: 'Plano básico, com armazenamento de até 15 mil notas',
      value: 'R$ 24,99',
    },
    {
      type: '2',
      name: 'Premium',
      description: 'Plano premium, com armazenamento de até 45mil notas',
      value: 'R$ 40,99',
    },
    {
      type: '3',
      name: 'Unlimited',
      description: 'Plano unlimited, com armazenamento ilimitado de notas',
      value: 'R$ 69,99',
    },
  ];

  return (
    <Wrapper id="plans">
      <Container>
        <Title>Escolha o melhor plano para você e sua empresa</Title>
        <Subtitle>Mude quando quiser</Subtitle>

        <Plans>
          {plansList.map(item => (
            <Plan
              key={item.type}
              type={item.type}
              name={item.name}
              description={item.description}
              value={item.value}
            />
          ))}
        </Plans>
      </Container>
    </Wrapper>
  );
}
