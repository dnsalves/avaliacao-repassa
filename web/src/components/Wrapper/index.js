import React from 'react';

import { Container } from './styles';

export default function Wrapper(props) {
  return <Container>{props.children}</Container>;
}
