import React, { ReactNode } from 'react';
import SideBar from 'components/Layout/SideBar';
import styles from './Layout.module.scss';

type LayoutProps = { children: ReactNode };

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
