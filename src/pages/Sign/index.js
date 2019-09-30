/* eslint-disable react/prop-types */
import querystring from 'querystring';

import React, { useState } from 'react';
import * as Yup from 'yup';

import { Container, Content, Button, Form, ErrorMessage } from './styles';

import CcInput from '../../components/form/CcInput';
import TextInput from '../../components/form/TextInput';
import SelectInput from '../../components/form/SelectInput';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import firebase from '../../services/firebase';

export default function Sign({ history, location }) {
  const [errorMessage, setErrorMessage] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [ccError, setCcError] = useState('');

  const options = [
    {
      id: '1',
      title: 'Basic',
    },
    {
      id: '2',
      title: 'Premium',
    },
    {
      id: '3',
      title: 'Unlimited',
    },
  ];

  const qs = querystring.parse(location.search.replace('?', ''));

  const initialData = {
    name: '',
    email: '',
    password: '',
    plan: (qs && qs.plan) || '',
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('Senha é obrigatória'),
    plan: Yup.string().required('Plano é obrgatório'),
  });

  const handleSubmit = async data => {
    try {
      const { name, email, password, plan } = data;
      setErrorMessage('');
      setCcError('');

      if (cardNumber === '' || expiryDate === '' || cvc === '') {
        setCcError('Dados do cartão de crédito inválidos');
        return;
      }

      await firebase.register(name, email, password);
      await firebase.setPlanData({ name, email, plan });

      history.replace('/congratulations');
    } catch (error) {
      setErrorMessage('E-mail já cadastrado!');
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form schema={schema} onSubmit={handleSubmit} initialData={initialData}>
          <TextInput label="Nome Completo" name="name" />
          <TextInput label="E-mail" name="email" />
          <TextInput label="Senha" name="password" type="password" />
          <SelectInput label="Plano" name="plan" options={options} />

          <CcInput
            label="Cartão de Crédito"
            error={ccError}
            cardNumberInputProps={{
              value: cardNumber,
              onChange: e => setCardNumber(e.target.value),
            }}
            cardExpiryInputProps={{
              value: expiryDate,
              onChange: e => setExpiryDate(e.target.value),
            }}
            cardCVCInputProps={{
              value: cvc,
              onChange: e => setCvc(e.target.value),
            }}
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button>Contratar</Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
