/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { FaUserEdit, FaUserTimes } from 'react-icons/fa';

import api from '../../services/api'
import history from '../../services/history'

import { Container, Table, ActionButton } from './styles';

export default class User extends Component {
  state = {
    users: []
  }

  getUsers = async () =>{
    const users = await api.get('/users')
    this.setState({users: users.data})
  }

  handleEdit = id => {
    history.push(`/Users/edit/${id}`);

  }

  handleRemove = async id => {
    if(window.confirm('Are you sure?')){
      await api.delete(`/users/${id}`)
      history.push('/Users')
    }
  }

  componentWillMount(){
    this.getUsers()
  }

  render() {
    const { users } = this.state;
    if (users.length > 0) {
      return (
        <Container>
          <Table>
            <li className="table-header">
              <div className="col col-1">Name</div>
              <div className="col col-2">Actions</div>
              <div className="col col-2"></div>
            </li>
            {users.map((u, i) => {
              return (
                <li className="table-row" key={i}>
                  <div className="col col-1">{u.name}</div>
                  <div className="col col-2">
                    <ActionButton onClick={() => this.handleEdit(u.id)}>
                      <FaUserEdit />
                    </ActionButton>
                  </div>
                  <div className="col col-2">
                    <ActionButton colorIcon="red" onClick={() => this.handleRemove(u.id)}>
                      <FaUserTimes />
                    </ActionButton>
                  </div>
                </li>
              )
            })}
          </Table>
        </Container>
      );
    } else {
      return(
        <Container>
          <h1>Loading...</h1>
        </Container>
      )
    }
  }
}
