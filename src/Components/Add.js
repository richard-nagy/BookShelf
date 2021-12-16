import React, { useEffect, useState } from "react";
import addStyles from "./Add.module.scss";
import "./App.module.scss";
import firebase from "./util/firebase";

let covers = [];

function Add({ exit, booksData, usersData, lang }) {
	const [selectedBookID, setSelectedBookID] = useState("");
	const [books, setBooks] = useState(undefined);

	useEffect(() => {
		async function pullData() {
			const userBooks = [];
			const allBooks = [];

			for (let id in usersData) {
				userBooks.push(usersData[id].bookID);
			}

			for (let id in booksData) {
				allBooks.push(booksData[id].bookID);
				covers.push(booksData[id].cover);
			}
			setBooks(allBooks.filter((val) => !userBooks.includes(val)));
		}
		pullData();
	}, [booksData, usersData]);

	return (
		<>
			{books !== undefined && (
				<div className={addStyles.addComponent}>
					<div className={addStyles.header}>
						<div>{lang.addBook}&nbsp;</div>
						<div onClick={exit} className={addStyles.xButton}>
							+
						</div>
					</div>
					<div className={addStyles.content}>
						<div className={addStyles.bookCovers}>
							{Object.keys(books).map((keyName, key) => (
								<div>
									<img
										key={key}
										className={addStyles.addImg}
										src={covers[parseInt(books[key])]}
										alt="BookCover"
										onClick={() =>
											setSelectedBookID(books[key])
										}
									/>
								</div>
							))}
						</div>
					</div>
					<div className={addStyles.footer}>
						<button
							onClick={() => {
								const userBooksRef = firebase
									.database()
									.ref("users/0/books");

								const dt = new Date();

								userBooksRef.child(selectedBookID).set({
									bookID: selectedBookID,
									finishDate: `${dt.getFullYear()}-${
										dt.getMonth() + 1
									}-${dt.getDate()}`,
									note: "",
									stars: "0",
									startDate: `${dt.getFullYear()}-${
										dt.getMonth() + 1
									}-${dt.getDate()}`,
								});

								setSelectedBookID("");
								exit();
							}}
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
