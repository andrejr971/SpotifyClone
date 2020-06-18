import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 230px);
  padding: 10px 30px;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  background: ${(props) => (props.visible ? 'rgba(0, 0, 0, 0.8)' : 'none')};
`;

export const GroupButton = styled.div`
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    border: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 50%;
    font-size: 20px;
  }
`;

export const Profile = styled.div`
  position: relative;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    h2 {
      padding: 5px;
      font-size: 12px;
    }

    svg {
      font-size: 20px;
      margin-right: 5px;
    }

    padding: 1px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
  }
`;

export const Options = styled.ul`
  list-style: none;
  position: absolute;
  top: 35px;
  width: 150px;
  background: #282828;
  border-radius: 4px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  li {
    display: flex;
    flex-direction: column;
    padding: 10px;
    opacity: 0.4;

    a,
    button {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      width: 100%;
    }

    button {
      border: 0;
      background: none;
    }

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.03);
    }
  }
`;
