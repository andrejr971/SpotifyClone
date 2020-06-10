import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  z-index: 120;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
`;

export const Content = styled.div`
  /* position: relative; */
  margin-top: 60px;
  width: 100%;
  height: 250px;
  max-width: 500px;
  background: #282828;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    padding-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
      padding: 10px 15px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 0;
      font-size: 17px;
    }
  }
`;

export const DivGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  button {
    width: 100%;
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

    & + button {
      background: none;
      color: #1ed760;

      &:hover {
        color: #fff;
        background: none;
      }
    }
  }
`;

export const DivPass = styled.div`
  display: flex;
  width: 100%;

  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    width: 40px;
    height: 40px;
    border: 0;
    padding: 10px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 17px;
    color: #fff;
    font-weight: bold;
    background: #1ed760;

    &:hover {
      background: ${darken(0.06, '#1ed760')};
    }
  }
`;
