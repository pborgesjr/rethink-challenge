/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { login } from '~/queries/user';

import logo from '~/assets/logo.svg';

import {
  Container,
  LoginFormContainer,
  LoginHeader,
  Title,
  InputContainer,
} from './styles';

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await login(loginData);
  }

  return (
    <Container>
      <LoginFormContainer>
        <LoginHeader>
          <img src={logo} alt="logo" />
          <Title>rethink passagens</Title>
        </LoginHeader>

        <form onSubmit={handleSubmit}>
          <InputContainer>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </InputContainer>

          <button type="submit">Entrar</button>
        </form>
      </LoginFormContainer>
    </Container>
  );
}

export default Login;
