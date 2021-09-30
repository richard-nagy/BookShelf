import React from "react";
import styles from "./App.module.scss";
import BookCover from "../Pictures/BookCover.jpg";

const Books = {
  book0: {
    author: "Author Name0",
    title: "The Title0",
    year: 2021,
    stars: 1,
  },
  book1: {
    author: "Author Name1",
    title: "The Title1",
    year: 2019,
    stars: 3,
  },
  book2: {
    author: "Author Name2",
    title: "The Title2",
    year: 2021,
    stars: 5,
  },
  book3: {
    author: "Author Name3",
    title: "The Title3",
    year: 2020,
    stars: 4,
  },
  book4: {
    author: "Author Name4",
    title: "The Title4",
    year: 2018,
    stars: 5,
  },
};

function returnStars(nmbrOfStars) {
  var stars = "";
  for (let index = 0; index < nmbrOfStars; index++) stars += "★";

  for (let index = 0; index < 5 - nmbrOfStars; index++) stars += "☆";

  return <div className={styles.stars}>{stars}</div>;
}

function returnYears() {
  let array = [];
  for (let index = 0; index < Object.keys(Books).length; index++) {
    array.push(Books[Object.keys(Books)[index]].year);
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  array.join();
  array.reverse().reverse(compareNumbers);
  array = [...new Set(array)];
  return array.map((keyName, key) => (
    <div className={styles.dot}>
      <div className={styles.year}>{keyName}</div>
    </div>
  ));
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
        <div className={styles.years}>{returnYears()}</div>
        <div className={styles.bookResults}>
          <div className={styles.bookResultsYear}>2021</div>
          &nbsp;
          <div className={styles.bookResultsNmb}>5</div>
        </div>
        <div className={styles.bookContainer}>
          {Object.keys(Books).map((keyName, key) => (
            <div className={styles.booksStars} key={key}>
              <img src={BookCover} alt="BookCover" />
              {returnStars(Books[keyName].stars)}
            </div>
          ))}
          <div className={styles.addBook}>
            <div className={styles.add} />
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
