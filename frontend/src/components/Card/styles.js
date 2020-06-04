import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 200px;
  background: #282828;
  height: 280px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
`;

export const Content = styled(Link)`
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    strong {
      color: #fff;
      font-size: 20px;
    }

    span {
      margin-top: 10px;
      color: #666;
      font-size: 12px;
    }
  }
`;

export const Play = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 50%;
  background: #1ed760;
  color: #fff;
  font-size: 25px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  bottom: 20px;
  right: 20px;

  &:hover {
    width: 47px;
    height: 47px;
    bottom: 19px;
    right: 19px;
  }
`;
