import React from 'react';
import * as Yup from 'yup';

import { Container, Content, Button, Form } from './styles';

import TextInput from '../../components/form/TextInput';
import SelectInput from '../../components/form/SelectInput';

import Header from '../../components/Header';

export default function Sign() {
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

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .min(4, 'Senha deve ter no mínimo 4 caracteres')
      .required('Senha é obrigatória'),
    plan: Yup.string().required('Plano é obrgatório'),
  });

  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <TextInput label="Nome Completo" name="name" />
          <TextInput label="E-mail" name="email" />
          <TextInput label="Senha" name="password" type="password" />
          <SelectInput label="Plano" name="plan" options={options} />
          <Button>Contratar</Button>
        </Form>
      </Content>
    </Container>
  );
}
