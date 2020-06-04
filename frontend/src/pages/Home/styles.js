import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 50px 30px;
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

export const Sections = styled.section`
  margin-top: 20px;

  h2 {
    color: #fff;
    padding-bottom: 10px;
  }
`;
