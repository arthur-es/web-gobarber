import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  background-color: #ff9000;
  color: #312e38;
  border-radius: 10px;
  border: 0;
  font-weight: 500;
  padding: 0px 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
