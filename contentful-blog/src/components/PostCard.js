import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import styles from '../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  const { file } = post.thumbnail.fields;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`https://${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
        />
      </div>

      <p className={styles.title}>{post.title}</p>

      <p className={styles.readTime}>Tempo de leitura: {post.readTime} min</p>

      <Link href={`/posts/${post.slug}`}>
        <p className={styles.buttonCard}>Ver matéria completa</p>
      </Link>
    </div>
  );
};

export default PostCard;
