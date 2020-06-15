import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: #282828;
  border-top: 1px solid #040404;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const Current = styled.div`
  width: 220px;
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
      font-size: 15px;
      color: #fff;
    }

    a {
      text-decoration: none;
      font-size: 13px;
      color: #666;
      margin-top: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  svg {
    color: #fff;
    font-size: 20px;
    margin-right: 5px;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: 0;
    margin: 0 15px;

    svg {
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Time = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;

  span {
    font-size: 11px;
    color: #666;
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;
