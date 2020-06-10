import styled from 'styled-components';

export const Container = styled.div`
  background: #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  button {
    background: none;
    border: 0;
    padding: 10px;
    color: #fff;

    svg {
      font-size: 20px;
    }

    /* &:hover {
      opacity: 0.6;
    } */
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 10px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
