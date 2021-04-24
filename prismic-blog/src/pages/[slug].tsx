import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import { prismicClient } from '../providers/prismicClient';

import { Container, PostText, PostVideo } from '../styles/pages/post';

interface PathProps {
  params: {
    slug: string;
  };
}

interface PostProps {
  post: Document;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>PrismBlog | {post.data.blog_title[0].text}</title>
      </Head>
      <Layout>
        <Container>
          <div className="content">
            <div className="back-link">
              <Link href="/">Voltar</Link>
            </div>
            <div className="post-infos">
              {!post.data.video_link.url && (
                <Image
                  src={post.data.blog_banner.url}
                  alt={post.data.blog_banner.small.alt}
                  width={post.data.blog_banner.dimensions.width}
                  height={post.data.blog_banner.dimensions.height}
                />
              )}

              {post.data.video_link.url && (
                <PostVideo>
                  <iframe
                    title="videoPlayer"
                    src={post.data.video_link.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </PostVideo>
              )}

              <h1 className="post-title">{post.data.blog_title[0].text}</h1>
              {/* 
                Is possible to use both above or below solutions using rich text:  
                1- <RichText render={post.data.blog_title} />
                2- {RichText.render(post.data.blog_title)
                3- <h1>{RichText.asText(post.data.blog_title)}</h1>
              */}

              <p className="read-time">
                Tempo de leitura: {post.data.read_time}min.
              </p>
            </div>

            <PostText>{RichText.render(post.data.blog_text)}</PostText>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prismicClient.query(
    Prismic.Predicates.at('document.type', 'blog_post')
  );

  const paths = posts.results.map((post) => ({
    params: { slug: post.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const post = await prismicClient.getByUID('blog_post', params.slug, {
    lang: 'pt-br',
  });

  return {
    props: {
      post,
    },
  };
};

export default Post;
