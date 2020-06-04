import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { singInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minímo 6 caracteres')
    .required('Senha é obrigatório'),
});

function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(singInRequest(email, password));
  }

  return (
    <div>
      <img src={logo} alt="Logo Spotify" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" placeholder="E-mail" autoComplete="off" />
        <Input type="password" name="password" placeholder="Senha" />
        <div>
          <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
          <Link to="/register">Inscrever-se</Link>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
