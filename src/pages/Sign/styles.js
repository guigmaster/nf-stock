import styled from 'styled-components';
import { Form as BaseForm } from '@rocketseat/unform';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  position: relative;
  background-color: ${colors.ligther};
`;

export const Content = styled.div`
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
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
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
