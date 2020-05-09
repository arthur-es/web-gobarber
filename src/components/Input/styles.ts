import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  color: #f4ede8;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  input {
    background-color: transparent;
    flex: 1;
    border: none;

    &::placeholder {
      color: #666360;
    }
  }
`;
