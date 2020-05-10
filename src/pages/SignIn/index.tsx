import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Entre com um e-mail válido')
            .required('O e-mail é obrigatório'),
          password: Yup.string().required('A senha é um campo obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Go Barber" />
          <Form onSubmit={handleSubmit} ref={formRef}>
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
          </Form>
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
