import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';

import Layout from '../components/Layout';
import { PostCard } from '../components/cards/PostCard';

import { prismicClient } from '../providers/prismicClient';

import { Container } from '../styles/pages/home';

interface HomeProps {
  posts: ApiSearchResponse;
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>PrismBlog | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <h1>Teste blog com prismic</h1>

          <div className="posts-container">
            {posts.results?.map((post, index: number) => (
              <PostCard key={index}>
                <img
                  src={post.data.blog_banner.url}
                  alt={post.data.blog_banner.small.alt}
                />
                <p className="post-title">{post.data.blog_title[0].text}</p>

                <Link href={{ pathname: '/[slug]', query: { slug: post.uid } }}>
                  <p className="post-link">Ver mais</p>
                </Link>
              </PostCard>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.query(
    Prismic.Predicates.at('document.type', 'blog_post')
  );

  return {
    props: {
      posts: response,
    },
  };
};

export default Home;
