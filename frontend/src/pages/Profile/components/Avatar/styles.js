import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  &.dropzone {
    margin-bottom: 10px;
    width: 160px;
    height: 160px;
    background: ${lighten(0.4, '#040404')};
    border-radius: 50%;
    border: 4px solid #1ed760;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    z-index: 50;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    text-align: center;
  }

  &.dropzone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &.dropzone p {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 50%;
    border: 1px dashed #4ecb79;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  &.dropzone p svg {
    color: #4ecb79;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const Edit = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  z-index: 54;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  text-align: center;

  svg {
    font-size: 30px;
  }
`;
