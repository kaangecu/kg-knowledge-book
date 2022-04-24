import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>MainPage</h1>
      <div>
        <iframe
          className={styles.frame}
          src="https://interactive-examples.mdn.mozilla.net/pages/js/expressions-spreadsyntax.html"
          title="MDN Web Docs Interactive Example"
          loading="lazy"
        />
        <iframe
          className={styles.frame}
          src="https://interactive-examples.mdn.mozilla.net/pages/js/expressions-spreadsyntax.html"
          title="MDN Web Docs Interactive Example"
          loading="lazy"
        />
        <iframe
          className={styles.frame}
          src="https://interactive-examples.mdn.mozilla.net/pages/js/expressions-spreadsyntax.html"
          title="MDN Web Docs Interactive Example"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
