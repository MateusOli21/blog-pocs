import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>PrismicBlog</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>Posts</li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  height: 80px;
  box-shadow: 0px 1px 12px 1px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    display: flex;

    li {
      padding: 0 16px;
      cursor: pointer;
    }
  }
`;

export default Header;
