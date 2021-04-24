import React from 'react';
import styled from 'styled-components';

interface VideoPostProps {
  url: string;
}

const VideoPost: React.FC<VideoPostProps> = ({ url }) => {
  return (
    <Container>
      <iframe
        title="videoPlayer"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

const Container = styled.div`
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

export default VideoPost;
