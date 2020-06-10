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

      a {
        text-decoration: none;
        color: inherit;
        font-size: 13px;
        margin-top: 10px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Content = styled.div`
  padding: 0 30px 10px;
  flex: 1;
`;

export const Controls = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* background: #181818; */
`;

export const More = styled.button`
  margin-left: 60px;
  background: none;
  border: 0;
  padding: 10px;

  svg {
    color: #666;
    font-size: 30px;

    &:hover {
      color: #fff;
    }
  }
`;

export const Play = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  background: #1ed760;
  color: #fff;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;

  bottom: 20px;
  right: 20px;

  &:hover {
    width: 62px;
    height: 62px;
    left: -1px;
    top: -1px;
  }
`;
