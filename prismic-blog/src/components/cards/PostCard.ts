import styled from 'styled-components';

export const PostCard = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 16px;
  box-shadow: 1px 0 14px 2px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-width: 360px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .post-title {
    font-weight: 600;
    margin-bottom: 24px;
  }

  .post-link {
    border: 1px solid black;
    width: fit-content;
    align-self: flex-end;
    padding: 4px 16px;
    border-radius: 4px;
  }
`;
