import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 4000);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Ops, não encontramos a página...</h1>
        <Link href="/">
          <span>Volte e veja outros posts!</span>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
