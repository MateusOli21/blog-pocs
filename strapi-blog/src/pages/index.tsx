import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';

import strapiApi from '../api/strapiApi';
import { PostTypes } from '../providers/post';

interface HomeProps {
  posts: PostTypes[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>PrismBlog | Home</title>
      </Head>
      <Layout>
        <Container>
          <h1>Blog com Strapi</h1>
          <div className="content">
            {posts?.map((post: PostTypes, index: number) => (
              <PostCard key={index}>
                <img
                  src={`http://localhost:1337${post.banner.url}`}
                  alt="teste"
                />
                <p className="title">{post.blogTitle}</p>

                <Link href={post.slug}>
                  <p className="post-link">Veja mais</p>
                </Link>
              </PostCard>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  padding: 48px 20px;
  background: #f6f6f6;

  .content {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 48px;
  }

  h1 {
    font-size: 36px;
    color: black;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const response = await strapiApi.get('BLOG-POSTS');

  return {
    props: {
      posts: response.data,
    },
  };
};

export default Home;
