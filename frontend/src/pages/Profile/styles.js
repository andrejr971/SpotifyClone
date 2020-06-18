import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  padding: 50px 30px 0;

  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  background: #040404;
  border-radius: 8px;

  input {
    width: 100%;
    height: 44px;
    border: 0;
    border-radius: 22px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: bold;
    color: #040404;
  }

  button {
    width: 100%;
    border: 0;
    height: 44px;
    border-radius: 22px;
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    background: #1ed760;

    &:hover {
      background: ${darken(0.06, '#1ed760')};
    }
  }
`;

export const Separator = styled.div`
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #282828;
`;
