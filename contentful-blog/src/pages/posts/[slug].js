import { createClient } from 'contentful';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

import Layout from '../../components/Layout';
import Skeleton from '../../components/Skeleton';

import styles from '../../styles/PostPage.module.css';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' });

  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: { destination: '/posts', permanent: false },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
};

export default function Post({ post }) {
  if (!post) return <Skeleton />;

  const { featuredImage, postText, tags, title, readTime } = post.fields;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={styles.textH4}>{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={styles.paragraph}>{children}</p>
      ),
      [BLOCKS.QUOTE]: (node) => (
        <div
          className={styles.blockquote}
        >{`"${node.content[0].content[0].value}"`}</div>
      ),
    },
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.banner}>
            <Image
              src={`https://${featuredImage.fields.file.url}`}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
            />
          </div>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.infos}>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <div key={index} className={styles.tag}>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <p>Tempo de leitura: {readTime} min.</p>
          </div>

          <div className={styles.main}>
            {documentToReactComponents(postText, options)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
