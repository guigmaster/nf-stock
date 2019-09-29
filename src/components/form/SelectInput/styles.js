import styled from 'styled-components';
import { Select as BaseSelect } from '@rocketseat/unform';

import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;

  label {
    font-size: 13px;
    margin-bottom: 5px;
    color: ${colors.regular};
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
    color: ${colors.error};
  }
`;

export const Select = styled(BaseSelect)`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: ${colors.white};
  border: 1px solid ${props => (props.error ? colors.error : colors.regular)};

  option {
    padding: 10px;
  }
`;
