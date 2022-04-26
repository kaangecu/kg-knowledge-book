import React from 'react';
import Link from 'next/link';
import { slugs } from 'consts';
import styles from './SideBar.module.scss';

const SideBar = () => {
  const renderLinks = slugs.map(({ url, text }) => (
    <li key={url}>
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </li>
  ));
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <nav>
          <ul>{renderLinks}</ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
