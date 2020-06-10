import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAutorenew } from 'react-icons/md';

import { Container, Content, DivGroup, DivPass } from './styles';

function NewUser({ visible, onClick }) {
  const [initals, setInitials] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });

  function handleVisible() {
    setInitials({
      name: '',
      last_name: '',
      email: '',
      password: '',
    });
    onClick();
  }

  document.addEventListener('keyup', (key) => {
    if (key.keyCode === 27 && visible) {
      onClick();
    }

    if (key.ctrlKey && key.keyCode === 13 && !visible) {
      onClick();
    }
  });

  function handlePassword() {
    var name = document.getElementById('name');
    var lastName = document.getElementById('last_name');
    var password = document.getElementById('password');

    if (!name.value) {
      toast.warn('Preencha o campo Nome');
      return;
    }

    if (!lastName.value) {
      toast.warn('Preencha o campo Último nome');
      return;
    }

    const nameConvert = name.value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    var number = Math.floor(Math.random() * 1000 + 1);
    var characters = ['.', '_', '-', '@', '#'];

    var array_last = lastName.value.toLowerCase().split('');

    var passTemp = [
      nameConvert.charAt(0).toUpperCase(),
      nameConvert.substr(0, 2).toLowerCase(),
      array_last.sort().join(''),
      characters[Math.floor(Math.random() * characters.length)],
      number,
    ];

    var createPass = shuffle(passTemp);

    password.value = `${createPass[2]}${createPass[1]}${createPass[0]}${createPass[3]}${createPass[4]}`;
  }

  function shuffle(array) {
    var indice = array.length,
      valueTmp,
      valueSort;

    while (0 !== indice) {
      valueSort = Math.floor(Math.random() * indice);
      indice -= 1;

      valueTmp = array[indice];
      array[indice] = array[valueSort];
      array[valueSort] = valueTmp;
    }

    return array;
  }

  function handleSubmit(data) {
    console.tron.log(data);

    handleVisible();
  }

  return (
    <Container visible={visible}>
      <Content>
        <h2>Novo Administrador</h2>
        <Form initialData={initals} onSubmit={handleSubmit}>
          <DivGroup>
            <Input
              name="name"
              id="name"
              autoComplete="none"
              placeholder="Nome"
            />
            <Input
              name="last_name"
              id="last_name"
              autoComplete="none"
              placeholder="Último nome"
            />
          </DivGroup>
          <Input name="email" autoComplete="off" placeholder="E-mail" />
          <DivPass>
            <Input
              name="password"
              id="password"
              type="text"
              autoComplete="off"
              placeholder="Senha"
            />
            <button type="button" onClick={handlePassword}>
              <MdAutorenew />
            </button>
          </DivPass>
          <DivGroup>
            <button type="submit">Criar</button>
            <button type="button" onClick={handleVisible}>
              Cancelar
            </button>
          </DivGroup>
        </Form>
      </Content>
    </Container>
  );
}

export default NewUser;
