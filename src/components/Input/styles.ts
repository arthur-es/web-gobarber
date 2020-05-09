import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #232129;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `};

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0px;
  }

  span {
    background-color: #c53030;
    color: white;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
