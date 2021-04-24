import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Container>
      <h1>StpBlog</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #f6f6f6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
  }

  ul {
    list-style: none;

    a {
      text-decoration: none;
      color: gray;
    }
  }
`;

export default Navbar;
