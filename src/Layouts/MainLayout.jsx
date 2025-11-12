import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./mainlayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className={styles["gridcontainer"]}>
        <header className={styles["gridcontainer__header"]}>Header</header>
        <aside className={styles["gridcontainer__sidebar"]}>Sidebar</aside>
        <main className={styles["gridcontainer__main"]}>
          {children || <Outlet />}
          <h1>Content</h1>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
