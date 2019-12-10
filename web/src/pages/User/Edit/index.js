import React, { Component } from 'react';
import { FaSignInAlt } from 'react-icons/fa'

import history from '../../../services/history'
import api from '../../../services/api'

import Title from '../../../components/Title';

import { StyledWrapper, SubmitButton } from './styles';

export default class Edit extends Component {
  state = {
    name: '',
    email: '',
    isAdmin: false
  }

  componentWillMount(){
    this.getUser();
  }

  handleName = e => {
    this.setState({ name: e.target.value })
  }

  handleEmail = email => {
    this.setState({ email })
  }

  handleAdmin = e =>{
    this.setState({
      isAdmin: !this.state.isAdmin,
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const request = await api.put(`/users/${id}`, this.state);

    if (request.status === 200) {
      alert('User updated successfully!')
      history.push('/Users')
    }
  }

  getUser = async () => {
    const { id } = this.props.match.params;
    const request = await api.get(`/users/${id}`);

    if (request.status === 200) {
      const { name, email, isAdmin } = request.data
      this.setState({ name, email, isAdmin })
    }
  }

  render() {
    const { name, email, isAdmin } = this.state
    return (
      <StyledWrapper>
        <Title text="Editing a user ..." />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What is your name?" value={name} onChange={this.handleName} />
          <input type="text" placeholder="And your e-mail?" value={email} onChange={this.handleEmail} />
          <span className="admin">
            <input type="checkbox" checked={isAdmin} onChange={this.handleAdmin} /> Admin?
          </span>
          <SubmitButton>
            Confirm editing
            <FaSignInAlt />
          </SubmitButton>
        </form>
      </StyledWrapper>
    );
  }
}
