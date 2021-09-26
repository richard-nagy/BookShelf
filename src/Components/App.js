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
      <div className={styles.content}>
        <div className={styles.srcContainer}>
          <div className={styles.srcButtonActive}>Éves Bontás</div>
          <div className={styles.srcButton}>Összes</div>
        </div>
        <div className={styles.srcDivider} />
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
