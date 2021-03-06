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
  position: relative;

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

export const NavMore = styled.ul`
  position: absolute;
  list-style: none;
  top: 30px;
  right: 0;
  width: 200px;
  background: #282828;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  li {
    display: flex;
    flex-direction: column;
    padding: 10px;
    opacity: 0.4;

    button {
      text-align: left;
      border: 0;
      background: none;
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      width: 100%;
    }

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.03);
    }
  }
`;
