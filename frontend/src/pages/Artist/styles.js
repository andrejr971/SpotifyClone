import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 95px;

  header {
    position: relative;
    /* padding: 50px 30px 10px; */
    width: 100%;
    height: 300px;
    background-image: linear-gradient(#282828, #121212);

    display: flex;
    align-items: center;
  }
`;

export const Cover = styled.div`
  position: absolute;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  span {
    width: 100%;
    height: 300px;
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #121212, transparent);
  }
`;

export const Perfil = styled.div`
  z-index: 40;
  padding: 50px 30px 10px;
  display: flex;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
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
`;

export const Content = styled.div`
  padding: 20px 30px 10px;
`;
