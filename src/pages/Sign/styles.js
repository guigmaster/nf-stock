import styled from 'styled-components';
import { Form as BaseForm } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100%;
  position: relative;
  background-color: #f5f6fd;
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
  color: #fff;
  margin: 0 10px;
  background-color: #5ad678;
`;

export const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;
