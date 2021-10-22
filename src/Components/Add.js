import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";

let covers = [];

function Add({ exit, booksData, usersData }) {
  const [selectedBookID, setSelectedBookID] = useState("");
  const [books, setBooks] = useState(undefined);
  const setBooksFunc = (data) => {
    setBooks(data);
  };

  useEffect(() => {
    async function pullData() {
      const userBooks = [];
      const allBooks = [];

      const usersValue = usersData;
      for (let id in usersValue) {
        userBooks.push(usersValue[id].bookID);
      }
      
      const booksValue = booksData;
      for (let id in booksValue) {
        allBooks.push(booksValue[id].bookID);
        covers.push(booksValue[id].cover);
      }

      setBooksFunc(allBooks.filter((val) => !userBooks.includes(val)));
    }
    pullData();
  }, [booksData, usersData]);

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
                  onClick={() => setSelectedBookID(books[key])}
                />
              ))}
            </div>
          </div>
          <div className={addStyles.footer}>
            <button
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/00/books");
                const dt = new Date();
                userBooksRef.child(selectedBookID).set({
                  bookID: selectedBookID,
                  finishDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`, // prettier-ignore
                  note: "",
                  stars: "0",
                  startDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`, // prettier-ignore
                });
                setSelectedBookID("");
                exit();
              }}
              disabled={selectedBookID === "" ? true : false}
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
