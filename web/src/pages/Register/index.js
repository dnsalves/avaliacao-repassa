import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Form, Input, Check } from '@rocketseat/unform';
import * as Yup from 'yup';

import Title from '../../components/Title';
import { Container, SubmitButton } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  name: Yup.string().required(),
  password: Yup.string()
    .min(6, 'Minimum 6 chars')
    .required('Password is required'),
});

export default function Login() {
  function handleSubmit(data) {}

  return (
    <Container>
      <Title text="Welcome to Repassa" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Insert your name" />
        <Input name="email" type="text" placeholder="Insert your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Insert your password"
        />
        <span className="admin">
          <Check name="isAdmin" label="admin?" />
        </span>
        <SubmitButton>
          Sign In
          <FaSignInAlt />
        </SubmitButton>
      </Form>
    </Container>
  );
}
