import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #040404;
  width: 230px;
  padding: 10px;
  height: calc(100% - 90px);

  img {
    width: 120px;
    margin: 20px 10px;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  list-style: none;

  li {
    display: flex;
    margin-bottom: 2px;

    a {
      width: 100%;
      padding: 10px;
      display: flex;
      text-decoration: none;
      font-weight: bold;
      color: #666;
      align-items: center;

      svg {
        font-size: 25px;
        margin-right: 10px;
      }

      &:hover {
        color: #fff;
      }

      &.active {
        color: #fff;
        background: #282828;
        border-radius: 4px;
      }
    }
  }
`;

export const NavGroup = styled.ul`
  list-style: none;

  li {
    display: flex;
    margin-bottom: 2px;

    a {
      opacity: 0.4;
      width: 100%;
      padding: 7px 10px;
      display: flex;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      align-items: center;

      svg {
        font-size: 25px;
        margin-right: 15px;
      }

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
        color: #fff;
        background: #282828;
        border-radius: 4px;
      }
    }
  }
`;

export const Playlist = styled.div`
  margin-top: 10px;
  padding: 10px;

  div {
    h3 {
      opacity: 0.6;
      color: #fff;
      font-size: 15px;
    }

    button {
      opacity: 0.4;
      background: none;
      border: 0;

      width: 100%;
      padding: 7px 0;
      display: flex;
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      align-items: center;
      font-size: 15px;

      span {
        border-radius: 2px;
        width: 30px;
        height: 30px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        svg {
          font-size: 20px;
          color: #040404;
        }
      }

      &:hover {
        opacity: 1;
      }
    }

    padding-bottom: 10px;
    border-bottom: 1px solid #666;
  }
`;

export const ULPlaylist = styled(PerfectScrollbar)`
  height: 100%;
  max-height: 200px;
  margin-top: 10px;
  padding: 0px 15px 0 0;
  margin-bottom: 0;
  border: none;

  ul {
    list-style: none;

    li {
      padding: 7px 0;
      opacity: 0.4;
      display: flex;

      a {
        width: 100%;
        text-decoration: none;
        color: #fff;
        cursor: default;
      }

      &.active {
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;
