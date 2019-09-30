/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container, InputWrapper, Input } from './styles';

// eslint-disable-next-line react/prop-types
export default function TextInput({ name, label, ...props }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <Input error={error} name={name} {...props} />
      </InputWrapper>
    </Container>
  );
}
