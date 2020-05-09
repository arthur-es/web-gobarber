import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="Go Barber" />
          <Form initialData={{ name: 'Diego' }} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" placeholder="Nome" icon={FiUser} />

            <Input name="email" placeholder="E-mail" icon={FiMail} />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="login">
            <FiArrowLeft size={22} />
            Voltar para o logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
