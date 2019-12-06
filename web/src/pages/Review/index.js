import React, { Component } from 'react';
import dateformat from 'dateformat';

import Title from '../../components/Title';

import api from '../../services/api';

import { Container, Table } from './styles';

export default class Review extends Component {
  state = {
    reviews : []
  }

  getReviews = async () =>{
    const id = localStorage.getItem('userId')
    console.log(id)
    const users = await api.get(`/avaliations/${id}`)
    this.setState({reviews: users.data})
  }

  componentWillMount(){
    this.getReviews();
  }

  render() {
    const { reviews } = this.state;

    if (reviews.length > 0) {
      return (
        <Container>
          <Title text="Your Reviews" />
          <Table>
            {reviews.map((u, i) => {
              return (
                <li className="table-row" key={i}>
                  <div>{u.avaliation}</div>
                  <div className="date">{dateformat(u.createdAt, "yyyy-mm-dd")}</div>
                </li>
              )
            })}
          </Table>
        </Container>
      )
    } else {
      return (
        <Container>
          <Title text="Your Reviews" />
          Not to show...
        </Container>
      );
    }
  }
}
