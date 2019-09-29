import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../styles/colors';
import { BaseWrapper, BaseContainer, BaseTitle } from '../../styles/common';

export const Wrapper = styled(BaseWrapper)`
  padding: 20px;
  background-color: ${colors.ligther};
`;

export const Container = styled(BaseContainer)``;

export const Title = styled(BaseTitle)``;

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 18px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 140px;
  padding: 20px;
  margin-top: 20px;
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 20px;
  }

  a {
    color: ${colors.info};
    &:hover {
      text-decoration: underline;
      color: ${darken(0.3, colors.info)};
    }
  }

  @media (min-width: 900px) {
    width: 40%;
  }
`;
