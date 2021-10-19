import React, { useEffect, useState } from "react";
import editStyle from "./Edit.module.scss";
import firebase from "./util/firebase";

let fDate = undefined;
let sDate = undefined;
let note = undefined;

function Edit({ exit, bookID }) {
  const [allBooks, setAllBooks] = useState(undefined);
  const [usersBooks, setUsersBooks] = useState(undefined);
  const [stars, setStars] = useState("5");

  useEffect(() => {
    async function pullData() {
      const usersRef = firebase.database().ref("users/00/books");
      const usersSnapshot = await usersRef.once("value");
      const usersValue = usersSnapshot.val()[bookID];

      note = usersValue.note;
      sDate = usersValue.starDate;
      fDate = usersValue.finishDate;
      setStars(usersValue.stars);
      setUsersBooks(usersValue);

      const booksRef = firebase.database().ref("allBooks");
      const booksSnapshot = await booksRef.once("value");
      const booksValue = booksSnapshot.val()[bookID];
      setAllBooks(booksValue);
    }

    pullData();
  }, [bookID]);

  return (
    <>
      {[allBooks, usersBooks].includes(undefined) === false && (
        <div className={editStyle.addComponent}>
          <div className={editStyle.header}>
            <div>Könyv Beállítások</div>
            <div onClick={exit} className={editStyle.xButton}>
              +
            </div>
          </div>
          <div className={editStyle.content}>
            {`${allBooks.title} - ${allBooks.author}`}

            <div className={editStyle.comment}>
              <div className={editStyle.wrapper}>
                <div className={editStyle.startingDate}>
                  <form>
                    <label htmlFor="finish">
                      <div className={editStyle.dateText}>Kezdés:</div>
                    </label>
                    <input
                      type="date"
                      name="finish"
                      defaultValue={usersBooks.startDate}
                      onChange={(e) => (sDate = e.target.value)}
                    />
                  </form>
                </div>
                <div className={editStyle.bookCover}>
                  <img src={allBooks.cover} alt="bookCover" />
                </div>
                <div className={editStyle.finishDate}>
                  <form>
                    <div className={editStyle.dateText}>Befejezve:</div>
                    <label htmlFor="end" />
                    <input
                      type="date"
                      name="end"
                      defaultValue={fDate}
                      onChange={(e) => (fDate = e.target.value)}
                    />
                  </form>
                </div>
                <div>
                  <div className={editStyle.starsText}>Értékelés:</div>
                  <div className={editStyle.stars2}>
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
            <div className={editStyle.comment}>Megjegyzés:</div>
            <div>
              <textarea
                defaultValue={note}
                onChange={(e) => (note = e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={editStyle.footer}>
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/00/books");
                userBooksRef.child(bookID).set(null);
                exit();
              }}
            >
              Törlés
            </button>
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/00/books");
                userBooksRef.child(bookID).set({
                  bookID: bookID,
                  finishDate: fDate,
                  stars: stars,
                  startDate: sDate,
                  note: note,
                });
                exit();
              }}
            >
              Mentés
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;
