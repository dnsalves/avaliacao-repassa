import React, {Component} from 'react';

import { Input } from './style'

export default class InputText extends Component {
  state = {
    value: ''
  }

  sendData = e => {
    this.setState({ value: e.target.value })
    this.props.cb(e.target.value);
  }

  render(){
    return (
      <Input
        value={this.state.value}
        onChange={this.sendData}
        placeholder={this.props.text}
      />
    )
  };
}
