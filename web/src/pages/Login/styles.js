import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 315px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
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
