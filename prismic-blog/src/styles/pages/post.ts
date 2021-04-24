import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 20px 32px;
  position: relative;

  .content {
    width: 100%;
    max-width: 1024px;
  }

  .back-link {
    margin-bottom: 24px;

    a {
      color: black;
      text-decoration: none;
    }
  }

  .post-infos {
    padding-bottom: 24px;
    margin-bottom: 48px;
    border-bottom: 1px solid gray;
  }

  .post-title {
    font-size: 44px;
    margin: 16px 0 12px;
  }

  .read-time {
    font-size: 14px;
  }
`;

export const PostText = styled.div`
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 20px;
    margin: 36px 0 16px;
  }

  p {
    line-height: 150%;
    margin-bottom: 16px;
  }
`;

export const PostVideo = styled.div`
  iframe {
    display: block;
    width: 100%;
    max-width: 490px;
    height: 290px;
  }

  @media (min-width: 538px) {
    iframe {
      max-width: 640px;
      height: 330px;
    }
  }

  @media (min-width: 690px) {
    iframe {
      max-width: 720px;
      height: 396px;
    }
  }

  @media (min-width: 770px) {
    iframe {
      max-width: 860px;
      height: 420px;
    }
  }

  @media (min-width: 900px) {
    iframe {
      max-width: 960px;
      height: 486px;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      max-width: 1180px;
      height: 520px;
    }
  }
  @media (min-width: 1200px) {
    iframe {
      max-width: 1200px;
      height: 576px;
    }
  }
`;
