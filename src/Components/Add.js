import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";

let covers = [];

function Add({ exit, booksData, usersData, lang }) {
  const [selectedBookID, setSelectedBookID] = useState("");
  const [books, setBooks] = useState(undefined);

  useEffect(() => {
    // Retrive data
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

      //Execlude books, that the user already have
      setBooks(allBooks.filter((val) => !userBooks.includes(val)));
    }
    pullData();
  }, [booksData, usersData]);

  return (
    <>
      {/* Wait till tha data arrives */}
      {books !== undefined && (
        <div className={addStyles.addComponent}>

          {/* Header */}
          <div className={addStyles.header}>
            <div>{lang.addBook}&nbsp;</div>
            <div onClick={exit} className={addStyles.xButton}>
              +
            </div>
          </div>
          {/* Content */}
          <div className={addStyles.content}>
            <div className={addStyles.booksContainer}>
              {/* List books */}
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
          {/* Footer */}
          <div className={addStyles.footer}>
            <button
              // onClick push the slected book to the user books
              onClick={() => {
                const userBooksRef = firebase.database().ref("users/00/books");
                const dt = new Date();
                userBooksRef.child(selectedBookID).set({
                  bookID: selectedBookID,
                  finishDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`,
                  note: "",
                  stars: "0",
                  startDate: `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`,
                });
                setSelectedBookID("");
                exit();
              }}
              // Cant click the button until a book is selected
              disabled={selectedBookID === "" ? true : false}
            >
              {lang.add}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Add;
