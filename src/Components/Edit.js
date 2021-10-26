import React, { useEffect, useState } from "react";
import editStyle from "./Edit.module.scss";
import firebase from "./util/firebase";

let finishDate = undefined;
let startDate = undefined;
let note = undefined;

function Edit({ exit, booksData, usersData, bookID, lang }) {
  const [allBooks, setAllBooks] = useState(undefined);
  const [usersBooks, setUsersBooks] = useState(undefined);
  const [stars, setStars] = useState();

  useEffect(() => {
    // Retrive data
    async function pullData() {
      setAllBooks(booksData);
      setStars(usersData.stars);
      setUsersBooks(usersData);
      note = usersData.note;
      startDate = usersData.startDate;
      finishDate = usersData.finishDate;
    }
    pullData();
  }, [booksData, usersData]);

  return (
    <>
      {/* Wait till tha data arrives */}
      {[allBooks, usersBooks].includes(undefined) === false && (
        <div className={editStyle.addComponent}>
          {/* Header */}
          <div className={editStyle.header}>
            <div>{lang.bookSettings}</div>
            <div onClick={exit} className={editStyle.xButton}>
              +
            </div>
          </div>
          {/* Content */}
          <div className={editStyle.content}>
            {`${allBooks.title} - ${allBooks.author}`}
            <div className={editStyle.comment}>
              <div className={editStyle.wrapper}>
                <div className={editStyle.startingDate}>
                  <form>
                    <label htmlFor="finish">
                      <div className={editStyle.dateText}>
                        {lang.beginning}:
                      </div>
                    </label>
                    <input
                      type="date"
                      name="finish"
                      defaultValue={usersBooks.startDate}
                      onChange={(e) => (startDate = e.target.value)}
                    />
                  </form>
                </div>
                <div className={editStyle.bookCover}>
                  <img src={allBooks.cover} alt="bookCover" />
                </div>
                <div className={editStyle.finishDate}>
                  <form>
                    <div className={editStyle.dateText}>{lang.completion}:</div>
                    <label htmlFor="end" />
                    <input
                      type="date"
                      name="end"
                      defaultValue={finishDate}
                      onChange={(e) => (finishDate = e.target.value)}
                    />
                  </form>
                </div>
                <div>
                  {/* Staring system */}
                  {lang.rating}:
                  <div className={editStyle.starsContainer}>
                    <div className={editStyle.stars}>
                      {[...Array(5)]
                        .slice(0)
                        .reverse()
                        .map((el, index) => (
                          <div key={index} className={editStyle.label}>
                            <input
                              className={editStyle.input}
                              type="radio"
                              id={`r${index}`}
                              name="rg1"
                              onChange={() => setStars(index + 1)}
                            />
                            <label htmlFor={`r${index}`}>
                              {stars <= index ? <>☆</> : <>★</>}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div
                      className={editStyle.starsNull}
                      onClick={() => setStars(0)}
                    >
                      Ø
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={editStyle.comment}>{lang.note}:</div>
            <div>
              <textarea
                defaultValue={note}
                onChange={(e) => (note = e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={editStyle.footer}>
            {/* onClick delete book from user */}
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/0/books");
                userBooksRef.child(bookID).set(null);
                exit();
              }}
            >
              {lang.delete}
            </button>
            {/* onClick push changes to user book */}
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/0/books");
                userBooksRef.child(bookID).set({
                  bookID: bookID,
                  finishDate: finishDate,
                  stars: stars,
                  startDate: startDate,
                  note: note,
                });
                exit();
              }}
            >
              {lang.save}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;
