import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 44px 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 44px;
  }

  .posts-container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
