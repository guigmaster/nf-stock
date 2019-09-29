import styled from 'styled-components';
import { darken } from 'polished';

import { Form as BaseForm } from '@rocketseat/unform';
import CreditCardInput from 'react-credit-card-input';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${colors.ligther};
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 50px;
`;

export const Button = styled.button`
  display: block;
  width: calc(100% - 20px);
  padding: 15px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  color: ${colors.white};
  margin: 0 10px;
  background-color: ${colors.success};

  &:hover {
    background-color: ${darken(0.2, colors.success)};
  }
`;

export const Form = styled(BaseForm)`
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  display: block;
  width: calc(100% - 20px);
  font-size: 14px;
  margin: 8px auto;
  padding: 8px;
  border-radius: 4px;
  color: ${colors.white};
  background-color: ${colors.error};
`;

export const CcInput = styled(CreditCardInput)`
  border: 1px solid ${props => (props.error ? colors.error : colors.regular)};
`;
