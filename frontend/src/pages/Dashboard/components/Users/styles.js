import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;

  header {
    margin: 10px 0;
    position: relative;
    display: flex;
    align-items: center;

    button {
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

export const Pop = styled.div`
  span {
    position: absolute;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    font-size: 13px;
    color: #fff;
    font-weight: bold;
    background: ${lighten(0.4, '#04040404')};
    padding: 10px;
    border-radius: 4px;
    top: 4px;
    transition: all 0.2s;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      left: -11px;
      top: 5px;
      width: 0;
      height: 0;
      border-bottom: 12px solid transparent;
      border-top: 12px solid transparent;
      border-right: 12px solid #141414;
      /* box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2); */
    }
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
