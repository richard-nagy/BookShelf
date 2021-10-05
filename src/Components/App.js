import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import BookCover from "../Pictures/BookCover.jpg";
import Add from "./Add.js";
import firebase from "./util/firebase";

let resultsNumber = 0;
let classContainer = styles.container;
let books = {};

function App() {
  const [activeFilter, setActiveFilter] = useState();
  const [yearsArray, setYearsArray] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const showAddOnClick = () => {
    setShowAdd(false);
  };
  const yearsArrayCaller = (value) => {
    setYearsArray([...value]);
  };

  useEffect(() => {
    const allBooksRef = firebase.database().ref("AllBooks");
    const usersBooksRef = firebase.database().ref("Users/User00");

    let userBooks = "";

    usersBooksRef.on("value", (snapshot) => {
      const value = snapshot.val();
      for (let id in value) {
        userBooks = value[id].split(" ");
      }
    });

    allBooksRef.on("value", (snapshot) => {
      const value = snapshot.val();
      const booksList = [];
      for (let id in value) {
        if (userBooks.includes(value[id].id)) booksList.push(value[id]);
      }

      books = booksList;

      let years = [];

      for (const [key] of Object.entries(booksList)) {
        years.push(booksList[key].year);
      }
      years.join();
      years.sort();
      years = [...new Set(years)];
      years.reverse();
      setActiveFilter(years[0]);
      yearsArrayCaller(years);
    });
  }, [showAdd]);

  function returnStars(nmbrOfStars) {
    var stars = "";
    for (let index = 0; index < nmbrOfStars; index++) stars += "★";
    for (let index = 0; index < 5 - nmbrOfStars; index++) stars += "☆";
    return <div className={styles.stars}>{stars}</div>;
  }

  function returnYears() {
    return yearsArray.map((keyName, key) => (
      <div className={styles.dot} key={key}>
        <div
          className={
            activeFilter === yearsArray[key] ? styles.yearFocus : styles.year
          }
          onClick={() => {
            setActiveFilter(yearsArray[key]);
            classContainer = styles.container;
          }}
        >
          {keyName}
        </div>
      </div>
    ));
  }

  function BookContainer() {
    resultsNumber = 0;
    return (
      <div className={styles.bookContainer}>
        {Object.keys(books).map((keyName, key) =>
          activeFilter === books[keyName].year || activeFilter === "All"
            ? ((resultsNumber += 1),
              (
                <div className={styles.booksStars} key={key}>
                  <img src={BookCover} alt="BookCover" />
                  {returnStars(books[keyName].stars)}
                </div>
              ))
            : null
        )}
        <div className={styles.addBook} onClick={() => setShowAdd(true)}>
          <div className={styles.add} />
        </div>
      </div>
    );
  }

  return (
    <div className={classContainer}>
      {showAdd === true
        ? ((classContainer = styles.unscrollableContainer),
          (
            <>
              <div
                className={styles.darkOverlay}
                onClick={() => {
                  setShowAdd(false);
                }}
              />
              <Add exit={showAddOnClick} />
            </>
          ))
        : null}
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
        {BookContainer()}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
