import React from 'react';

import { StyledButton } from './styles';

export default function Button(props) {
  const { text, icon, click } = props;

  return (
    <StyledButton onClick={click}>
      {text}
      {icon}
    </StyledButton>
  );
}
