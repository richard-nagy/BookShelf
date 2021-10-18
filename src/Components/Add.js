import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";
import bookCover from "../Pictures/BookCover.jpg";

function Add({ exit }) {
  const [selectBook, setSelectBook] = useState("");
  const [books, setBooks] = useState(undefined);
  const functionComponent = (data) => {
    setBooks(data);
  };

  useEffect(() => {
    async function pullData() {
      const userBooks = [];
      const allBooks = [];

      const eventref = firebase.database().ref("users/00/books");
      const snapshot = await eventref.once("value");
      const value = snapshot.val();
      for (let id in value) {
        userBooks.push(value[id].bookID);
      }

      const eventref2 = firebase.database().ref("allBooks");
      const snapshot2 = await eventref2.once("value");
      const value2 = snapshot2.val();
      for (let id in value2) {
        allBooks.push(value2[id].bookID);
      }

      console.log(userBooks);
      console.log(allBooks);

      functionComponent(allBooks.filter((val) => !userBooks.includes(val)));
    }
    pullData();
  }, []);

  return (
    <>
      {books !== undefined ? (
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
                  className={addStyles.addImg}
                  src={bookCover}
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
                userBooksRef.child(selectBook).set({
                  bookID: selectBook,
                  finishDate: "????-??-??",
                  stars: "0",
                  startDate: "????-??-??",
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
      ) : null}
    </>
  );
}

export default Add;
