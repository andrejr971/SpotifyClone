import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;

export const YourSongs = styled.div`
  grid-column: 1/3;
  background: linear-gradient(to bottom right, #666, #282828);
  height: 280px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;

  a {
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100%;
    text-decoration: none;

    h1 {
      color: #fff;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Play = styled.button`
  position: absolute;
  width: 70px;
  height: 70px;
  border: 0;
  border-radius: 50%;
  background: #1ed760;
  color: #fff;
  font-size: 25px;
  display: ${(props) => (props.visible ? 'flex' : 'flex')};
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

  bottom: 20px;
  right: 20px;

  &:hover {
    width: 72px;
    height: 72px;
    bottom: 19px;
    right: 19px;
  }
`;
