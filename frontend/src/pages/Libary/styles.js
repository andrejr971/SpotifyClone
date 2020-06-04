import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  padding: 50px 30px 0;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      padding: 15px 0;

      a {
        margin-right: 10px;
        padding: 10px;
        text-decoration: none;
        color: #666;
        font-size: 17px;
        font-weight: bold;

        &.active {
          color: #fff;
          background: #282828;
          border-radius: 4px;
        }

        &:hover {
          color: #fff;
          background: #282828;
          border-radius: 4px;
        }
      }
    }
  }
`;

export const DivContent = styled.div``;
