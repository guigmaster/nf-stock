import styled from 'styled-components';

import { BaseWrapper, BaseContainer } from '../../styles/common';

export const Wrapper = styled(BaseWrapper)`
  padding: 20px;
  min-height: 150px;
  background-color: #f5f6fd;
`;

export const Container = styled(BaseContainer)``;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #515c65;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 300;
  color: #515c65;
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
