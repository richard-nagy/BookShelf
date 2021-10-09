import React, { useEffect, useState } from "react";
import appStyles from "./App.module.scss";
import BookCover from "../Pictures/BookCover.jpg";
import Add from "./Add.js";
import Edit from "./Edit.js";
import firebase from "./util/firebase";

let resultsNumber = 0;
let appContainer = appStyles.appContainerScrollable;
let books = {};

function App() {
  const [activeFilter, setActiveFilter] = useState();
  const [yearsArray, setYearsArray] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const showEditOnClick = () => {
    setShowEdit(false);
  };
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
    return <div className={appStyles.stars}>{stars}</div>;
  }

  function returnYears() {
    return yearsArray.map((keyName, key) => (
      <div className={appStyles.dot} key={key}>
        <div
          className={
            activeFilter === yearsArray[key]
              ? appStyles.yearsFocus
              : appStyles.year
          }
          onClick={() => {
            setActiveFilter(yearsArray[key]);
            appContainer = appStyles.appContainerScrollable;
          }}
        >
          {keyName}
        </div>
      </div>
    ));
  }

  function BooksContainer() {
    resultsNumber = 0;
    return (
      <div className={appStyles.booksContainer}>
        {Object.keys(books).map((keyName, key) =>
          activeFilter === books[keyName].year || activeFilter === "All"
            ? ((resultsNumber += 1),
              (
                <div
                  className={appStyles.booksStars}
                  key={key}
                  onClick={() => setShowEdit(true)}
                >
                  <img src={BookCover} alt="BookCover" />
                  {returnStars(books[keyName].stars)}
                </div>
              ))
            : null
        )}
        <div className={appStyles.addBook} onClick={() => setShowAdd(true)}>
          <div className={appStyles.addCenter} />
        </div>
      </div>
    );
  }

  return (
    <div className={appContainer}>
      {showAdd === true
        ? ((appContainer = appStyles.appContainerUnscrollable),
          (
            <>
              <div
                className={appStyles.darkOverlay}
                onClick={() => {
                  setShowAdd(false);
                }}
              />
              <Add exit={showAddOnClick} />
            </>
          ))
        : null}
      {showEdit === true
        ? ((appContainer = appStyles.appContainerUnscrollable),
          (
            <>
              <div
                className={appStyles.darkOverlay}
                onClick={() => {
                  setShowEdit(false);
                }}
              />
              <Edit exit={showEditOnClick} />
            </>
          ))
        : null}
      <div className={appStyles.header}>
        <div className={appStyles.menu}>
          <div className={appStyles.logo} unselectable="on">
            BookShelf
          </div>
        </div>
      </div>
      <div className={appStyles.content}>
        <div className={appStyles.optionsContainer}>
          <div
            className={
              activeFilter !== "All"
                ? appStyles.optionButtonActive
                : appStyles.optionButton
            }
            onClick={() => setActiveFilter(yearsArray[0])}
          >
            Éves Bontás
          </div>
          <div
            className={
              activeFilter === "All"
                ? appStyles.optionButtonActive
                : appStyles.optionButton
            }
            onClick={() => setActiveFilter("All")}
          >
            Összes
          </div>
        </div>
        <div className={appStyles.optionDivider} />
        {activeFilter !== "All" ? (
          <div className={appStyles.yearsContainer}>{returnYears()}</div>
        ) : null}
        <div className={appStyles.bookResults}>
          <div className={appStyles.bookResultsYear}>
            {activeFilter === "All" ? "Összes" : activeFilter}
          </div>
          &nbsp;
          <div className={appStyles.bookResultsNmbr}>{resultsNumber}</div>
        </div>
        {BooksContainer()}
      </div>
      <div className={appStyles.footer}></div>
    </div>
  );
}

export default App;
