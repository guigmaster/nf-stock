import styled from 'styled-components';
import colors from './colors';

export const BaseWrapper = styled.section`
  position: relative;
  display: block;
  background-color: ${colors.white};
`;

export const BaseContainer = styled.div`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
`;

export const BaseTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: ${colors.primary};
`;
