import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  &.dropzone {
    width: 100%;
    height: 300px;
    /* background: ${lighten(0.4, '#1ed760')}; */
    /* border-radius: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    outline: 0;
    cursor: pointer;
  }

  &.dropzone p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #4ecb79;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  &.dropzone p svg {
    color: #4ecb79;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const Image = styled.div`
  position: relative;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 10px; */
  }

  span {
    width: 100%;
    height: 300px;
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #121212, transparent);
  }
`;

export const Edit = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  z-index: 41;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  svg {
    font-size: 40px;
    margin-right: 10px;
  }
`;
