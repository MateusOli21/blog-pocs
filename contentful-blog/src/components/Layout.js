import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <h1>BlogCon</h1>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contato</Link>
        </nav>
      </header>

      <main className="page-content">{children}</main>
    </div>
  );
}
