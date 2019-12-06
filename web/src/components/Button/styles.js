import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 5px 0 0;
  height: 44px;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  background: #bbb;
  font-weight: bold;
  color: #fff;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #15cfc3;
  }
  svg {
    margin: 0 0 0 10px;
  }
`;
