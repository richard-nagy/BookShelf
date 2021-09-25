import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.logo}>BookShelf</div>
        </div>
      </div>
      <div className={styles.content}>Content</div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
