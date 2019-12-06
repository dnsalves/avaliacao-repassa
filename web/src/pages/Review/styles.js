import styled from 'styled-components';

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
    color #999;

    .date {
      display: flex;
      justify-content: flex-end;
      color: #76cbfb;
    }
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
    display: flex;
    flex-direction: column;
  }
`;
