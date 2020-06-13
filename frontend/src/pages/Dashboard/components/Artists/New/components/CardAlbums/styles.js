import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 160px;
  position: relative;
  cursor: pointer;
`;

export const Content = styled(Link)`
  text-decoration: none;

  img {
    width: 160px;
    height: 160px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Play = styled.button`
  text-decoration: none;
  position: absolute;
  width: 160px;
  height: 160px;
  border: 0;

  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 25px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  top: 0;
  left: 0;

  span {
    width: 45px;
    height: 45px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      width: 60px;
      height: 60px;

      svg {
        font-size: 30px;
      }
    }
  }
`;

export const Description = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  strong {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
`;
