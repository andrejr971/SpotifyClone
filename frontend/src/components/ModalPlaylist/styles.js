import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 120;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const Content = styled.div`
  padding: 50px 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  div {
    background: #121212;
    border-radius: 8px;
    width: 100%;
    max-width: 350px;
    padding: 10px;

    ul {
      list-style: none;
    }
  }
`;

export const GroupDiv = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  width: 100%;

  button {
    border: 0;
    width: 100%;
    height: 44px;
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
      text-align: center;
      font-size: 17px;
      color: #1ed760;
      font-weight: bold;
      text-decoration: none;
      padding: 10px;

      &:hover {
        background: none;
        color: ${darken(0.06, '#1ed760')};
      }
    }
  }
`;
