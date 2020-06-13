import styled from 'styled-components';
import { darken } from 'polished';
import ContentEditable from 'react-contenteditable';

export const Container = styled.div`
  height: 100vh;
`;

export const ContentLoading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 0px 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
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
  }
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
`;

export const Info = styled.div`
  z-index: 50;
  position: absolute;
  bottom: 50px;
  left: 30px;
  display: flex;
  align-items: center;
`;

export const Div = styled.div`
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
`;

export const Input = styled(ContentEditable)`
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
`;

export const List = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  h2 {
    grid-column: 1/7;
    color: #fff;
  }
`;
