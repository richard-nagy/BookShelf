import React, { useEffect, useState } from "react";
import appStyles from "./App.module.scss";
import BookCover from "../Pictures/BookCover.jpg";
import Add from "./Add.js";
import Edit from "./Edit.js";
import firebase from "./util/firebase";

let resultsNumber = 0;
let appContainer = appStyles.appContainerScrollable;
let bookYears = {};
let books = undefined;
let editBookID = undefined;
let stars = [];

function App() {
  const [activeFilter, setActiveFilter] = useState("2021");
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
    let userBooksFD = [];
    let ize = [];

    async function pullData() {
      const eventref = firebase.database().ref("users/00/books");
      const snapshot = await eventref.once("value");
      const value = snapshot.val();
      for (let id in value) {
        userBooksFD.push(value[id].finishDate.slice(0, 4));
        ize.push(value[id].bookID);
        stars.push(value[id].stars);
      }

      bookYears = userBooksFD;

      books = ize;

      userBooksFD.join();
      userBooksFD.sort();
      userBooksFD = [...new Set(userBooksFD)];
      userBooksFD.reverse();

      yearsArrayCaller(userBooksFD);
    }
    pullData();
  }, [showAdd]);

  return (
    <>
      {books !== undefined ? (
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
                  <Edit exit={showEditOnClick} bookID={editBookID} />
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
            ) : null}
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
                  {Object.keys(bookYears).map((keyName, key) =>
                    activeFilter === "All" || bookYears[key] === activeFilter
                      ? ((resultsNumber += 1),
                        (
                          <div
                            className={appStyles.booksStars}
                            key={key}
                            onClick={() => {
                              setShowEdit(true);
                              editBookID = books[key];
                            }}
                          >
                            <img src={BookCover} alt="BookCover" />
                            {/* {returnStars(bookYears[keyName].stars)} */}
                            <div className={appStyles.stars}>
                              {[...Array(parseInt(stars[key]))].map(
                                (el, index) => (
                                  <>★</>
                                )
                              )}
                              {[...Array(5 - parseInt(stars[key]))].map(
                                (el, index) => (
                                  <>☆</>
                                )
                              )}
                            </div>
                          </div>
                        ))
                      : null
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
      ) : null}
    </>
  );
}

export default App;
