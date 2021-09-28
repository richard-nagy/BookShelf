import React from "react";
import styles from "./App.module.scss";

const Books = {
  book0: {
    author: "Author Name0",
    title: "The Title0",
    stars: 1,
  },
  book1: {
    author: "Author Name1",
    title: "The Title1",
    stars: 3,
  },
  book2: {
    author: "Author Name2",
    title: "The Title2",
    stars: 5,
  },
  book3: {
    author: "Author Name3",
    title: "The Title3",
    stars: 4,
  },
  book4: {
    author: "Author Name4",
    title: "The Title4",
    stars: 5,
  },
};

function returnStars(nmbrOfStars) {
  var stars = "";
  for (let index = 0; index < nmbrOfStars; index++) stars += "★";

  for (let index = 0; index < 5 - nmbrOfStars; index++) stars += "☆";

  return <div className={styles.stars}>{stars}</div>;
}

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
        <div className={styles.years}>
          <div className={styles.yearFocus}>2021</div>&nbsp;·&nbsp;
          <div className={styles.year}>2020</div>&nbsp;·&nbsp;
          <div className={styles.year}>2019</div>&nbsp;·&nbsp;
          <div className={styles.year}>2018</div>
        </div>

        <div className={styles.bookResults}>
          <div className={styles.teszt}>2021</div>
          &nbsp;
          <div className={styles.bookResultsNmb}>5</div>
        </div>

        <div className={styles.bookContainer}>
          {Object.keys(Books).map((keyName, key) => (
            <div className={styles.booksStars} key={key}>
              <div className={styles.gridElement}>
                Author: {Books[keyName].author}
                <br />
                Title: {Books[keyName].title}
              </div>
              {returnStars(Books[keyName].stars)}
            </div>
          ))}
          <div className={styles.gridElement}>
            <div className={styles.circle} />
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
