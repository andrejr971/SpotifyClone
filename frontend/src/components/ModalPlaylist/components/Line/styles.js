import styled from 'styled-components';

export const Container = styled.li`
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  background: ${(props) => (props.clicked ? '#282828' : 'none')};

  cursor: pointer;

  & + li {
    margin-top: 5px;
  }

  &:hover {
    background: #282828;
  }
`;
