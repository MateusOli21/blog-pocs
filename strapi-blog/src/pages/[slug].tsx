import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Layout from '../components/Layout';
import VideoPost from '../components/VideoPost';

import strapiApi from '../api/strapiApi';
import { PostTypes } from '../providers/post';

interface PathProps {
  params: {
    slug: string;
  };
}

interface PostPageProps {
  post: PostTypes;
}

const Post: React.FC<PostPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>PrismBlog | Post</title>
      </Head>
      <Layout>
        <Container>
          <div className="content">
            {!post.videoLink && (
              <img src={`http://localhost:1337${post.banner.url}`} />
            )}

            {post.videoLink && <VideoPost url={post.videoLink} />}

            <h2 className="title">{post.blogTitle}</h2>

            <p className="read-time">Tempo de leitura: {post.readTime} min.</p>

            <PostText>
              <ReactMarkdown children={post.blogText} />
            </PostText>
          </div>
        </Container>
      </Layout>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 48px 20px;
  background: #f6f6f6;

  .content {
    width: 100%;
    max-width: 1024px;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .title {
    font-size: 36px;
    margin: 32px 0 16px;
  }

  .read-time {
    margin-bottom: 36px;
  }
`;

const PostText = styled.div`
  p {
    line-height: 150%;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 20px;
    margin: 32px 0 16px;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await strapiApi.get('/blog-posts');

  return {
    paths: posts.data.map((post: PostTypes) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const response = await strapiApi.get(`/blog-posts?slug=${params.slug}`);

  return {
    props: {
      post: response.data[0],
    },
  };
};

export default Post;
