import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useNavigate, useLocation } from 'react-router-dom';

import * as actions from '../../store/modules/auth/action';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const prevPath = get(location, 'state.prevPath', '/');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido.');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath, navigate }));
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
            />
          </label>

          <button type="submit">Acessar</button>
        </Form>
      </Container>
    </>
  );
}
