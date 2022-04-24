import React from 'react';
import Link from 'next/link';
import styles from './SideBar.module.scss';

type SideBarType = {
  items?: Array<string>;
};

const SideBar = (props: SideBarType) => {
  const { items } = props;
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/second">
                <a>Second</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
