import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";
import bookCover from "../Pictures/BookCover.jpg";

function Add({ exit }) {
  const [selectBook, setSelectBook] = useState("");
  const [books, setBooks] = useState({});

  function pushToDatabase(bookId) {
    const usersRef = firebase.database().ref("Users/User00");

    let data = {
      books: bookId,
    };

    let userBooks = [];

    usersRef.on("value", (snapshot) => {
      userBooks.push(snapshot.val().Books);
    });

    usersRef.child("Books").set(data.books + " " + userBooks);

    setSelectBook("");

    exit();
  }

  useEffect(() => {
    const todoRef2 = firebase.database().ref("Users/User00");
    let userBooks;
    todoRef2.on("value", (snapshot) => {
      userBooks = snapshot.val().Books;
    });

    const allBooks = [];

    const todoRef = firebase.database().ref("AllBooks");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }

      Object.keys(todoList).map((keyName, key) =>
        allBooks.push(todoList[key].id)
      );
    });

    setBooks(allBooks.filter((val) => !userBooks.split(" ").includes(val)));
  }, []);

  return (
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
            <img src={bookCover} alt="BookCover" onClick={()=> setSelectBook(books[key])}/>
          ))}
        </div>
      </div>
      <div className={addStyles.footer}>
        <button
          onClick={() => pushToDatabase(selectBook)}
          disabled={selectBook === "" ? true : false}
        >
          Hozzáadás
        </button>
      </div>
    </div>
  );
}

export default Add;
