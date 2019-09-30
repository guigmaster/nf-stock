import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.footer`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;
  margin-top: 20px;

  background-color: ${colors.white};
`;

export const Copy = styled.span`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
`;
