import React from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';

import history from '../../services/history';
import { Container } from './styles';

export default function Dashboard() {
  const isAdmin = localStorage.getItem('userIsAdmin');
  const addUsers = isAdmin ? (
    <Button text="Add Users" click={() => history.push('/Register')} />
  ) : null;
  const showUsers = isAdmin ? (
    <Button text="Show Users" click={() => history.push('/Users')} />
  ) : null;

  return (
    <Container>
      <Title text="Where do you going?" />
      {addUsers}
      {showUsers}
    </Container>
  );
}
