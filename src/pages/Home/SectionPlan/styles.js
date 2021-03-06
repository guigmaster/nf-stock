import styled from 'styled-components';

import colors from '../../../styles/colors';
import { BaseWrapper, BaseContainer, BaseTitle } from '../../../styles/common';

export const Wrapper = styled(BaseWrapper)`
  padding: 20px;
  min-height: 150px;
  background-color: ${colors.ligther};
`;

export const Container = styled(BaseContainer)``;

export const Title = styled(BaseTitle)``;

export const Subtitle = styled.h2`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
  color: ${colors.primary};
`;

export const Plans = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
