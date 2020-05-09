import React from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Go Barber" />
          <form>
            <h1>Faça seu logon</h1>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </form>
          <a href="login">
            <FiLogIn size={22} />
            Criar conta
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
