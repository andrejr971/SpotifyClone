import styled from 'styled-components';

export const Container = styled.div``;

export const Line = styled.div`
  margin-top: 5px;
  padding: 10px 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  border-radius: 4px;
  background: ${(props) => (props.selected ? '#282828' : 'none')};
  color: ${(props) => (props.playing ? '#1ed760' : '#fff')};

  &:hover {
    background: #282828;
  }
`;

export const Music = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
  }
`;

export const Details = styled.div`
  margin-left: 10px;

  h3 {
    font-size: 17px;
  }

  div {
    display: flex;
    align-items: center;

    strong {
      font-weight: normal;

      a {
        text-decoration: none;
        color: #666;
        font-size: 13px;

        &:hover {
          text-decoration: underline;
          color: #fff;
        }
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5px;

  div {
    margin-right: 10px;

    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }

  button {
    margin-right: 10px;
    background: none;
    border: 0;
    padding: 10px;

    svg {
      color: #666;
      font-size: 25px;

      &:hover {
        color: #fff;
      }
    }
  }
`;
