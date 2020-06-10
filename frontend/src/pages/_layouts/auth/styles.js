import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    max-width: 450px;
    padding: 10px;
    background: #040404;
    border-radius: 8px;

    img {
      display: block;
      width: 200px;
      height: 60.17px;
      margin: 0 auto 10px;
    }

    form {
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

      span {
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        /* align-self: flex-start; */
        padding: 20px;
      }

      div {
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        align-items: center;

        button {
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

        a {
          text-align: center;
          font-size: 17px;
          color: #1ed760;
          font-weight: bold;
          text-decoration: none;
          padding: 10px;

          &:hover {
            color: ${darken(0.06, '#1ed760')};
          }
        }
      }
    }
  }
`;
