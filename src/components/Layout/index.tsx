import React, { ReactNode } from 'react';
import SideBar from  'components/Layout/SideBar'
import styles from "./Layout.module.scss"

type LayoutProps = { hi?: string; children: ReactNode };

const defaultProps = {};

const Layout = (props: LayoutProps) => {
  const {children} = props
  return <main className={styles.main}><SideBar/>{children}</main>;
};

export default Layout;
