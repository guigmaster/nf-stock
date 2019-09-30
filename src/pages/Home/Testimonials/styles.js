import styled from 'styled-components';

import { BaseWrapper, BaseContainer, BaseTitle } from '../../../styles/common';

export const Wrapper = styled(BaseWrapper)`
  padding: 20px 0 50px;
`;

export const Container = styled(BaseContainer)``;

export const Title = styled(BaseTitle)`
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
