import React, { useEffect, useState } from "react";
import appStyles from "./App.module.scss";
import Add from "./Add.js";
import Edit from "./Edit.js";
import firebase from "./util/firebase";

let resultsNumber = 0;
let appContainer = appStyles.appContainerScrollable;
let bookYears = {};
let books = undefined;
let editBookID = undefined;
let stars = [];
let covers = [];

function App() {
  const [activeFilter, setActiveFilter] = useState("2021");
  const [yearsArray, setYearsArray] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const setShowEditFunction = () => {
    setShowEdit(false);
  };
  const setShowAddFunction = () => {
    setShowAdd(false);
  };
  const setYearsArrayFunction = (value) => {
    setYearsArray([...value]);
  };

  useEffect(() => {
    let userBooksFD = [];
    let bookID = [];

    async function pullData() {
      const usersRef = firebase.database().ref("users/00/books");
      const usersSnapshot = await usersRef.once("value");
      const usersValue = usersSnapshot.val();
      for (let id in usersValue) {
        userBooksFD.push(usersValue[id].finishDate.slice(0, 4));
        bookID.push(usersValue[id].bookID);
        stars.push(usersValue[id].stars);
      }

      const booksRef = firebase.database().ref("allBooks");
      const booksSnapshot = await booksRef.once("value");
      const booksValue = booksSnapshot.val();
      for (let id in booksValue) {
        covers.push(booksValue[id].cover);
      }

      bookYears = userBooksFD;
      books = bookID;
      userBooksFD.join();
      userBooksFD.sort();
      userBooksFD = [...new Set(userBooksFD)];
      userBooksFD.reverse();
      setYearsArrayFunction(userBooksFD);
    }
    pullData();
  }, [showEdit, showAdd]);

  return (
    <>
      {books !== undefined && (
        <div className={appContainer}>
          {showAdd === true &&
            ((appContainer = appStyles.appContainerUnscrollable),
            (
              <>
                <div
                  className={appStyles.darkOverlay}
                  onClick={() => {
                    setShowAdd(false);
                  }}
                />
                <Add exit={setShowAddFunction} />
              </>
            ))}
          {showEdit === true &&
            ((appContainer = appStyles.appContainerUnscrollable),
            (
              <>
                <div
                  className={appStyles.darkOverlay}
                  onClick={() => {
                    setShowEdit(false);
                  }}
                />
                <Edit exit={setShowEditFunction} bookID={editBookID} />
              </>
            ))}
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
            {activeFilter !== "All" && (
              <div className={appStyles.yearsContainer}>
                {yearsArray.map((keyName, key) => (
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
                      <>{keyName}</>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className={appStyles.bookResults}>
              <div className={appStyles.bookResultsYear}>
                {activeFilter === "All" ? "Összes" : activeFilter}
              </div>
              &nbsp;
              <div className={appStyles.bookResultsNmbr}>{resultsNumber}</div>
            </div>
            {
              ((resultsNumber = 0),
              (
                <div className={appStyles.booksContainer}>
                  {Object.keys(bookYears).map(
                    (keyName, key) =>
                      (activeFilter === "All" ||
                        bookYears[key] === activeFilter) &&
                      ((resultsNumber += 1),
                      (
                        <div
                          className={appStyles.booksStars}
                          key={key}
                          onClick={() => {
                            setShowEdit(true);
                            editBookID = books[key];
                          }}
                        >
                          <img src={covers[key]} alt="BookCover" />
                          <div className={appStyles.stars}>
                            {[...Array(parseInt(stars[key]))].map(
                              (el, index) => "★"
                            )}
                            {[...Array(5 - parseInt(stars[key]))].map(
                              (el, index) => "☆"
                            )}
                          </div>
                        </div>
                      ))
                  )}
                  <div
                    className={appStyles.addBook}
                    onClick={() => setShowAdd(true)}
                  >
                    <div className={appStyles.addCenter} />
                  </div>
                </div>
              ))
            }
          </div>
          <div className={appStyles.footer}></div>
        </div>
      )}
    </>
  );
}

export default App;
