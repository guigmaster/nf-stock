import styled from 'styled-components';
import { Select as BaseSelect } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;

  label {
    font-size: 13px;
    margin-bottom: 5px;
    color: #a2b0b8;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 5px;
    font-style: italic;
    font-size: 12px;
    color: #f86969;
  }
`;

export const Select = styled(BaseSelect)`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid ${props => (props.error ? '#f86969' : '#ccc')};

  option {
    padding: 10px;
  }
`;
