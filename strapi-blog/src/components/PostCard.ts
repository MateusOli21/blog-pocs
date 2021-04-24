import styled from 'styled-components';

export const PostCard = styled.div`
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  img {
    width: 100%;
    margin-bottom: 24px;
    border-radius: 4px;
  }

  .post-link {
    width: fit-content;
    border-bottom: 1px solid gray;
    padding-bottom: 4px;
    align-self: flex-end;
    margin-top: 24px;
  }
`;
