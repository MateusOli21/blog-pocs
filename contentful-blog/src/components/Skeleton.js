import styles from '../styles/Skeleton.module.css';
import Layout from './Layout';

const Skeleton = () => {
  return (
    <Layout>
      <div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.banner}></div>
            <div className={styles.title}></div>
            <div className={styles.infos}></div>
            <div className={styles.main}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skeleton;
