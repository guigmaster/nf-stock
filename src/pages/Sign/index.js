/* eslint-disable react/prop-types */
import querystring from 'querystring';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { Container, Content, Button, Form, ErrorMessage } from './styles';

import TextInput from '../../components/form/TextInput';
import SelectInput from '../../components/form/SelectInput';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import firebase from '../../services/firebase';

export default function Sign({ history, location }) {
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (data, { resetForm }) => {
    try {
      const { name, email, password, plan } = data;
      setErrorMessage('');

      await firebase.register(name, email, password);
      await firebase.setPlanData({ name, email, plan });

      resetForm();
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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button>Contratar</Button>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
