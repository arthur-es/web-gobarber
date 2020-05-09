import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;

  flex-direction: column;
  place-content: center;

  padding: 40px 0px;

  form {
    width: 340px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;

    h1 {
      margin-top: 24px;
      font-size: 20px;
      margin-bottom: 24px;
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  > a {
    text-decoration: none;
    color: #ff9000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
`;
