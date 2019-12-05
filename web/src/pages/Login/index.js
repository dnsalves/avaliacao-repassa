import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Title from '../../components/Title';
import { Container, SubmitButton } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  function handleSubmit(data) {}

  return (
    <Container>
      <Title text="Welcome to Repassa" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <SubmitButton>
          Sign In
          <FaSignInAlt />
        </SubmitButton>
      </Form>
    </Container>
  );
}
