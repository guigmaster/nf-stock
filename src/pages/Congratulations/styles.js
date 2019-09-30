import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.ligther};
`;

export const Content = styled.section`
  flex: 1;
  display: block;

  div {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    max-width: 1440px;
    align-items: center;
  }

  h1 {
    font-size: 32px;
    text-align: center;
    font-weight: 700;
    color: ${colors.primary};

    span {
      display: block;
      font-size: 24px;
      font-weight: 300;
    }
  }
`;

export const Button = styled(Link)`
  text-transform: uppercase;
  padding: 15px 20px;
  border-radius: 4px;
  color: ${colors.white};
  margin-top: 50px;
  background-color: ${colors.success};

  &:hover {
    background-color: ${darken(0.2, colors.success)};
  }
`;
