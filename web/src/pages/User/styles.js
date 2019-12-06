import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Table = styled.ul`
  li {
    border-radius: 3px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .table-header {
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .col-1 {
    flex-basis: 60%;
  }
  .col-2 {
    flex-basis: 20%;
  }
`;

export const ActionButton = styled.button`
  height: 15px;
  padding: 10px 5px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;

  &:hover {
    background: ${darken(0.03, '#15cfc3')};
  }

  svg {
    color: ${props => (props.colorIcon ? props.colorIcon : '#000')};
  }
`;
