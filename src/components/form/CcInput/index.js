/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CreditCardInput from 'react-credit-card-input';

import colors from '../../../styles/colors';
import { Container, InputWrapper } from './styles';

// eslint-disable-next-line react/prop-types
export default function CcInput({ name, label, error, ...props }) {
  const fieldStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: error ? colors.error : colors.regular,
  };

  const customTextLabels = {
    invalidCardNumber: 'Número do cartão é inválido',
    invalidCvc: 'Código de Sugurança inválido',
    cardNumberPlaceholder: 'Número do cartão',
    expiryPlaceholder: 'MM/AA',
    cvcPlaceholder: 'CC',
  };

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <CreditCardInput
          fieldStyle={fieldStyle}
          customTextLabels={customTextLabels}
          {...props}
        />
        {error && <span>{error}</span>}
      </InputWrapper>
    </Container>
  );
}
