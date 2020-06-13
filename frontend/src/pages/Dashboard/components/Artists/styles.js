import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  header {
    margin: 20px 0;

    a {
      text-decoration: none;
      border: 0;
      padding: 10px;
      border-radius: 4px;
      font-size: 17px;
      color: #fff;
      font-weight: bold;
      background: #1ed760;

      margin-right: 10px;

      &:hover {
        background: ${darken(0.06, '#1ed760')};
      }
    }
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  h2 {
    color: #fff;
  }
`;
