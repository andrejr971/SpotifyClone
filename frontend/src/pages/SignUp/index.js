import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { singUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'No minímo 3 caracteres')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minímo 6 caracteres')
    .required('Senha é obrigatório'),
});

function SignUp() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(singUpRequest(name, email, password));
  }

  return (
    <div>
      <img src={logo} alt="Logo Spotify" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" autoComplete="none" />
        <Input name="email" placeholder="E-mail" autoComplete="off" />
        <Input type="password" name="password" placeholder="Senha" />
        <div>
          <button type="submit" disabled={loading ? true : false}>
            {loading ? 'Carregando...' : 'Inscrever-se'}
          </button>
          <Link to="/" disabled={loading ? true : false}>
            Voltar ao login
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
