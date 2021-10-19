import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";

let covers = [];

function Add({ exit }) {
  const [selectBook, setSelectBook] = useState("");
  const [books, setBooks] = useState(undefined);
  const setBooksFunction = (data) => {
    setBooks(data);
  };

  useEffect(() => {
    async function pullData() {
      const userBooks = [];
      const allBooks = [];

      const usersRef = firebase.database().ref("users/00/books");
      const usersSnapshot = await usersRef.once("value");
      const usersValue = usersSnapshot.val();
      for (let id in usersValue) {
        userBooks.push(usersValue[id].bookID);
      }

      const booksRef = firebase.database().ref("allBooks");
      const booksSnapshot = await booksRef.once("value");
      const booksValue = booksSnapshot.val();
      for (let id in booksValue) {
        allBooks.push(booksValue[id].bookID);
        covers.push(booksValue[id].cover);
      }

      setBooksFunction(allBooks.filter((val) => !userBooks.includes(val)));
    }
    pullData();
  }, []);

  return (
    <>
      {books !== undefined && (
        <div className={addStyles.addComponent}>
          <div className={addStyles.header}>
            <div>Könyv Hozzáadása</div>
            <div onClick={exit} className={addStyles.xButton}>
              +
            </div>
          </div>
          <div className={addStyles.content}>
            <div className={addStyles.booksContainer}>
              {Object.keys(books).map((keyName, key) => (
                <img
                  key={key}
                  className={addStyles.addImg}
                  src={covers[parseInt(books[key])]}
                  alt="BookCover"
                  onClick={() => setSelectBook(books[key])}
                />
              ))}
            </div>
          </div>
          <div className={addStyles.footer}>
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/00/books");
                const dt = new Date();
                userBooksRef.child(selectBook).set({
                  bookID: selectBook,
                  finishDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`, // prettier-ignore
                  stars: "0",
                  startDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`, // prettier-ignore
                });
                setSelectBook("");
                exit();
              }}
              disabled={selectBook === "" ? true : false}
            >
              Hozzáadás
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Add;
