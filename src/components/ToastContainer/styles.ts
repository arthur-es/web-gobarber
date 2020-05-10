import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  padding: 30px;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.2);
  display: flex;

  background-color: #ebf8ff;
  color: #3172b7;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    border: none;
    background: transparent;
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      > svg {
        margin-top: 0px;
      }
    `}
`;
