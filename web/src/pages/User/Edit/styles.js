import styled from 'styled-components';
import { darken } from 'polished';

import { Container } from '../../../components/Wrapper/styles';

export const StyledWrapper = styled(Container)`
  max-width: 350px;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input[type='text'] {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      margin: 0 0 10px;
      height: 44px;
    }
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  margin: 5px 0 0;
  height: 44px;
  border: 0;
  border-radius: 4px;
  background: #15cfc3;
  font-weight: bold;
  color: #fff;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${darken(0.03, '#15cfc3')};
  }
  svg {
    margin: 0 0 0 10px;
  }
`;
