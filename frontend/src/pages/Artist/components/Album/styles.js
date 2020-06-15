import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #666;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`;
