import { createClient } from 'contentful';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: 'blogPost' });

  return {
    props: {
      posts: response.items,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className={styles.container}>
        {posts &&
          posts.map((post, index) => (
            <PostCard key={index} post={post.fields} />
          ))}
      </div>
    </Layout>
  );
}
