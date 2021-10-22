import React, { useEffect, useState } from "react";
import appStyles from "./App.module.scss";
import Add from "./Add.js";
import Edit from "./Edit.js";
import firebase from "./util/firebase";

let results = 0;
let appContainerStyle = appStyles.appContainerScrollable;
let editBookID = undefined;
let userBooks = undefined;
let allBooks = undefined;

function App() {
  const [activeFilter, setActiveFilter] = useState();
  const [yearsArray, setYearsArray] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [books, setBooks] = useState({});

  const setShowEditFunc = () => {
    setShowEdit(false);
    appContainerStyle = appStyles.appContainerScrollable;
  };

  const setShowAddFunc = () => {
    setShowAdd(false);
    appContainerStyle = appStyles.appContainerScrollable;
  };

  useEffect(() => {
    let userBooksDate = [];
    let booksHolder = {};

    async function pullData() {
      const usersRef = firebase.database().ref("users/00/books");
      const usersSnapshot = await usersRef.once("value");
      const usersValue = usersSnapshot.val();

      for (let id in usersValue) {
        booksHolder[id] = {
          finishDate: usersValue[id].finishDate,
          stars: usersValue[id].stars,
        };
        userBooksDate.push(usersValue[id].finishDate.slice(0, 4));
      }

      const booksRef = firebase.database().ref("allBooks");
      const booksSnapshot = await booksRef.once("value");
      const booksValue = booksSnapshot.val();
      for (let id in usersValue) {
        booksHolder[id] = {
          ...booksHolder[id],
          bookID: booksValue[id].bookID,
          cover: booksValue[id].cover,
        };
      }

      userBooksDate.join();
      userBooksDate.sort();
      userBooksDate = [...new Set(userBooksDate)];
      userBooksDate.reverse();
      setYearsArray(userBooksDate);
      setActiveFilter(userBooksDate[0]);

      setBooks(booksHolder);

      allBooks = booksValue;
      userBooks = usersValue;
    }
    pullData();
  }, [showEdit, showAdd]);

  return (
    <>
      {Object.keys(books).length !== 0 && (
        <div className={appContainerStyle}>
          {showAdd === true &&
            ((appContainerStyle = appStyles.appContainerUnscrollable),
            (
              <>
                <div
                  className={appStyles.darkOverlay}
                  onClick={() => {
                    setShowAdd(false);
                    appContainerStyle = appStyles.appContainerScrollable;
                  }}
                />
                <Add
                  exit={setShowAddFunc}
                  booksData={allBooks}
                  usersData={userBooks}
                />
              </>
            ))}
          {showEdit === true &&
            ((appContainerStyle = appStyles.appContainerUnscrollable),
            (
              <>
                <div
                  className={appStyles.darkOverlay}
                  onClick={() => {
                    setShowEdit(false);
                    appContainerStyle = appStyles.appContainerScrollable;
                  }}
                />
                <Edit
                  exit={setShowEditFunc}
                  booksData={allBooks[editBookID]}
                  usersData={userBooks[editBookID]}
                  bookID={editBookID}
                />
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
                        appContainerStyle = appStyles.appContainerScrollable;
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
              <div className={appStyles.bookResultsNmbr}>{results}</div>
            </div>
            {
              /* Books Container */
              ((results = 0),
              (
                <div className={appStyles.booksContainer}>
                  {Object.keys(books).map(
                    (keyName, key) =>
                      ("All" === activeFilter ||
                        books[keyName].finishDate.slice(0, 4) ===
                          activeFilter) &&
                      ((results += 1),
                      (
                        <div
                          className={appStyles.booksStars}
                          key={key}
                          onClick={() => {
                            editBookID = books[keyName].bookID;
                            setShowEdit(true);
                          }}
                        >
                          {/* Book Image */}
                          <img
                            src={books[keyName].cover}
                            alt="BookCover"
                          />

                          {/* Stars */}
                          <div className={appStyles.stars}>
                            {
                              [...Array(parseInt(books[keyName].stars))].map((el, index) => "★") // prettier-ignore
                            }
                            {
                              [...Array(5 - parseInt(books[keyName].stars))].map((el, index) => "☆") // prettier-ignore
                            }
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
        </div>
      )}
    </>
  );
}

export default App;
