import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid ${props => (props.isFocused ? '#ff9000' : '#232129')};

  svg {
    margin-right: 16px;
    color: ${props =>
      props.isFocused || props.isFilled ? '#ff9000' : '#666360'};
  }

  & + div {
    margin-top: 8px;
  }

  input {
    background-color: transparent;
    flex: 1;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
