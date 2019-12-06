import React, { Component } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

import api from '../../services/api'
import history from '../../services/history'

import Title from '../../components/Title';
import { Container, SubmitButton } from './styles';

export default class Login extends Component{
  state = {
    name:'',
    email: '',
    password: '',
    isAdmin: false
  }

  handleName = e =>{
    this.setState({name: e.target.value})
  }

  handleEmail = e =>{
    this.setState({email: e.target.value})
  }

  handlePassword = e =>{
    this.setState({password: e.target.value})
  }

  handleAdmin = e =>{
    this.setState({isAdmin: e.target.checked})
  }

  handleSubmit = async e =>{
    e.preventDefault()
    const request = await api.post('/users', this.state);
    if (request.status === 200) {
      history.push('/Dashboard')
    }else{
      alert('Erro ao cadastrar')
    }
  }

  render(){

    return (
      <Container>
        <Title text="Register a User" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Insert your name" onChange={this.handleName} />
          <input type="text" placeholder="Insert your e-mail" onChange={this.handleEmail} />
          <input type="password" placeholder="Insert your password" onChange={this.handlePassword} />
          <span className="admin">
            <input type="checkbox" onClick={this.handleAdmin} /> Admin?
          </span>
          <SubmitButton>
            Sign In
            <FaSignInAlt />
          </SubmitButton>
        </form>
      </Container>
    )
  }

}
