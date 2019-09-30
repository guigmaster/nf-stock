import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten, darken } from 'polished';

import colors from '../../../../styles/colors';

const planColors = {
  1: '#ff843b',
  2: '#008fff',
  3: '#7159c1',
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  min-width: 280px;
  min-height: 280px;

  margin: 10px 0;
  padding: 20px 0;

  background-color: ${colors.white};
  border-radius: 0 0 4px 4px;
  border-top: 7px solid ${props => planColors[props.type]};

  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);

  @media (min-width: 900px) {
    width: 280px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => lighten(0.1, planColors[props.type])};
`;

export const Description = styled.p`
  margin: 15px 0;
  max-width: 60%;
  text-align: center;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const Button = styled(Link)`
  border-radius: 4px;
  padding: 10px 15px;
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.success};

  &:hover {
    background-color: ${darken(0.2, colors.success)};
  }
`;
