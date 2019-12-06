import React, { Component } from 'react';

import { FaSignInAlt } from 'react-icons/fa';

import api from '../../services/api';
import history from '../../services/history'

import { Container, SubmitButton } from './styles';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmail = e =>{
    this.setState({email: e.target.value})
  }

  handlePassword = e =>{
    this.setState({password: e.target.value})
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state
    const request = await api.post('/sessions', { email, password });
    if (request.status === 200) {
      localStorage.setItem('authorization', request.data.token);
      localStorage.setItem('userId', request.data.user.id);
      localStorage.setItem('userIsAdmin', request.data.user.isAdmin);

      history.push('/Register');
    }
  }

  render(){
    return (
      <Container>
        <h1>Welcome to Repassa</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Insert your e-mail" onChange={this.handleEmail} />
          <input type="password" placeholder="Insert your password" onChange={this.handlePassword} />
          <SubmitButton>
            Sign In
            <FaSignInAlt />
          </SubmitButton>
        </form>
      </Container>
    );
  }
}
