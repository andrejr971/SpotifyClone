import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 95px;

  /* margin-top: -50px; */

  header {
    padding: 50px 30px 10px;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(#282828, #121212);

    display: flex;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
      margin-right: 10px;
    }

    div {
      color: #fff;

      h1 {
        margin-top: 10px;
        font-size: 50px;
      }

      small {
        font-size: 13px;
        margin-top: 10px;
      }
    }
  }
`;
