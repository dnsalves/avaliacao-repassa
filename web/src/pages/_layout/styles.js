import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: #15cfc3;
  color: #fff;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  width: 110px;
  height: 35px;
  font-weight: bold;

  display: flex;
  align-items: center;
  align-self: flex-end;

  svg {
    margin-left: 10px;
  }
`;
