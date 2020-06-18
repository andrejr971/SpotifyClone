import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Avatar from './components/Avatar';

import { userUpdateRequest } from '../../store/modules/user/actions';

import { Container, Content, Form, Separator } from './styles';

function Profile() {
  const [perfil, setPerfil] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [profile]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);

    if (perfil) {
      data.append('file', perfil);
    }

    if (oldPassword) {
      data.append('oldPassword', oldPassword);

      if (!password) {
        toast.warn('Preencha o campo senha');
        return;
      }

      if (!confirmPassword) {
        toast.warn('Preencha o campo Confirmar senha');
        return;
      }

      data.append('password', password);
      data.append('confirmPassword', confirmPassword);
    }

    dispatch(userUpdateRequest(data));
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Avatar data={profile} onFileUploaded={setPerfil} />
          <input
            type="text"
            defaultValue={name}
            onChange={({ target }) =>
              name !== target.value && setName(target.value)
            }
            placeholder="Nome"
            autoComplete="none"
          />
          <input
            type="text"
            placeholder="E-mail"
            defaultValue={email}
            onChange={({ target }) =>
              email !== target.value && setEmail(target.value)
            }
            autoComplete="none"
          />
          <Separator />
          <input
            type="password"
            onChange={({ target }) => setOldPassword(target.value)}
            placeholder="Senha"
          />
          <input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Nova senha"
          />
          <input
            type="password"
            onChange={({ target }) => setConfirmPassword(target.value)}
            placeholder="Confirmar senha"
          />
          <Separator />
          <button type="submit">Salvar</button>
        </Form>
      </Content>
    </Container>
  );
}

export default Profile;
