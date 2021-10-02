import React, { useEffect, useState } from "react";
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
  book5: {
    author: "Author Name5",
    title: "The Title5",
    year: 2021,
    stars: 5,
  },
  book6: {
    author: "Author Name6",
    title: "The Title6",
    year: 2019,
    stars: 2,
  },
};

let resultsNumber = 0;

function App() {
  const [activeFilter, setActiveFilter] = useState();
  const [yearsArray, setYearsArray] = useState([]);
  const addEntryClick = (value) => {
    setYearsArray([...value]);
  };

  useEffect(() => {
    let array = [];
    for (const [key] of Object.entries(Books)) {
      array.push(Books[key].year);
    }
    array.join();
    array.sort();
    array = [...new Set(array)];
    array.reverse();
    setActiveFilter(array[0]);
    addEntryClick(array);
  }, []);

  function returnStars(nmbrOfStars) {
    var stars = "";
    for (let index = 0; index < nmbrOfStars; index++) stars += "★";
    for (let index = 0; index < 5 - nmbrOfStars; index++) stars += "☆";
    return <div className={styles.stars}>{stars}</div>;
  }

  function returnYears() {
    return yearsArray.map((keyName, key) => (
      <div className={styles.dot}>
        <div
          className={
            activeFilter === yearsArray[key] ? styles.yearFocus : styles.year
          }
          onClick={() => setActiveFilter(yearsArray[key])}
        >
          {keyName}
        </div>
      </div>
    ));
  }

  function stuff() {
    resultsNumber = 0;
    return (
      <div className={styles.bookContainer}>
        {Object.keys(Books).map((keyName, key) =>
          activeFilter === Books[keyName].year || activeFilter === "All"
            ? ((resultsNumber += 1),
              (
                <div className={styles.booksStars} key={key}>
                  <img src={BookCover} alt="BookCover" />
                  {returnStars(Books[keyName].stars)}
                </div>
              ))
            : null
        )}
        <div className={styles.addBook}>
          <div className={styles.add} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.logo} unselectable="on">
            BookShelf
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.srcContainer}>
          <div
            className={
              activeFilter !== "All" ? styles.srcButtonActive : styles.srcButton
            }
            onClick={() => setActiveFilter(yearsArray[0])}
          >
            Éves Bontás
          </div>
          <div
            className={
              activeFilter === "All" ? styles.srcButtonActive : styles.srcButton
            }
            onClick={() => setActiveFilter("All")}
          >
            Összes
          </div>
        </div>
        <div className={styles.srcDivider} />
        {activeFilter !== "All" ? (
          <div className={styles.years}>{returnYears()}</div>
        ) : null}
        <div className={styles.bookResults}>
          <div className={styles.bookResultsYear}>
            {activeFilter === "All" ? "Összes" : activeFilter}
          </div>
          &nbsp;
          <div className={styles.bookResultsNmb}>{resultsNumber}</div>
        </div>
        {stuff()}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
