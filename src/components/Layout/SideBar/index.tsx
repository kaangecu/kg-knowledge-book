import React from 'react';
import Link from 'next/link';
import styles from "./SideBar.module.scss"

// Declaring type of props - see "Typing Component Props" for more examples
type SideBarType = {
  items?: Array<string>;
}; /* use `interface` if exporting so that consumers can extend */

const SideBar = (props: SideBarType) => {
  const { items } = props;
  return (
    <aside className={styles.aside}>
      <div className={styles.main}>
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
