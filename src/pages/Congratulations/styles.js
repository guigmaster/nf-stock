import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f5f6fd;
`;

export const Content = styled.section`
  flex: 1;
  display: block;
  background-color: #f5f6fd;

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
    color: #515c65;

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
  color: #fff;
  margin-top: 50px;
  background-color: #5ad678;
  &:hover {
    background-color: ${darken(0.2, '#5ad678')};
  }
`;
