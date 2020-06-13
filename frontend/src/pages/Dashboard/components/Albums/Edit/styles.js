import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 95px;

  header {
    padding: 50px 30px 10px;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(#282828, #121212);

    display: flex;
    align-items: center;

    form {
      display: flex;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  padding: 0 30px 10px;
  flex: 1;
`;

export const FormGroup = styled.div`
  margin-left: 10px;

  button {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    background: #1ed760;

    &:hover {
      background: ${darken(0.06, '#1ed760')};
    }
  }

  input {
    background: none;
    border: 0;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
    padding: 5px 10px;
    height: 34px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #333;
    }

    &:focus {
      padding: 3px 8px;
      border: 2px solid #fff;
      background: #333;
      cursor: auto;
    }
  }
`;

export const DivContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  button {
    text-decoration: none;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    background: #1ed760;

    &:hover {
      background: ${darken(0.06, '#1ed760')};
    }
  }
`;
