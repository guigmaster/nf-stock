import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  max-width: 400px;

  padding: 20px;
  margin: 0 auto 20px;

  border-radius: 10px;
  background-color: ${colors.ligther};

  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const Quote = styled.div`
  margin: 10px 0;
`;

export const Author = styled.span`
  margin-top: 20px;
  font-style: italic;
  font-size: 12px;
`;
