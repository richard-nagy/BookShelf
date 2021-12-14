import React, { useEffect, useState } from "react";
import appStyles from "./App.module.scss";
import Add from "./Add.js";
import Edit from "./Edit.js";
import firebase from "./util/firebase";
import huFlag from "../pictures/hu.png";
import enFlag from "../pictures/en.png";

let results = 0;
let appStyle = appStyles.appScrollable;
let editBookID = undefined;
let userBooks = undefined;
let allBooks = undefined;
let words = {
	en: {
		flag: enFlag,
		annualBreakdown: "Annual Breakdown",
		all: "All",
		bookSettings: "Book Settings",
		beginning: "Beginning",
		completion: "Completion",
		note: "Note",
		rating: "Rating",
		delete: "Delete",
		save: "Save",
		addBook: "Add Book",
		add: "Add",
	},
	hu: {
		flag: huFlag,
		annualBreakdown: "Éves Bontás",
		all: "Összes",
		bookSettings: "Könyv Beállítások",
		beginning: "Kezdés",
		completion: "Befejezés",
		note: "Megjegyzés",
		rating: "Értékelés",
		delete: "Törlés",
		save: "Mentés",
		addBook: "Könyv Hozzáadása",
		add: "Hozzáadás",
	},
};

function App() {
	const [language, setLanguage] = useState(words.hu);
	const [activeFilter, setActiveFilter] = useState(undefined);
	const [yearsArray, setYearsArray] = useState([]);
	const [showEdit, setShowEdit] = useState(false);
	const [showAdd, setShowAdd] = useState(false);
	const [books, setBooks] = useState({});

	// Close Edit component
	const setShowEditFunc = () => {
		setShowEdit(false);
		appStyle = appStyles.appScrollable;
	};

	// Close Add component
	const setShowAddFunc = () => {
		setShowAdd(false);
		appStyle = appStyles.appScrollable;
	};

	useEffect(() => {
		let userBooksDate = [];
		let booksHolder = {};

		// Retrive data from firebase
		async function pullData() {
			const usersRef = firebase.database().ref("users/0/books");
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

			// Remove duplicates, and sort years
			userBooksDate.join();
			userBooksDate.sort();
			userBooksDate = [...new Set(userBooksDate)];
			userBooksDate.reverse();
			setYearsArray(userBooksDate);

			// When the site is opened, set active filter as the highest year
			if (results === 0) setActiveFilter(userBooksDate[0]);

			setBooks(booksHolder);
			allBooks = booksValue;
			userBooks = usersValue;
		}
		pullData();
	}, [showEdit, showAdd]);

	return (
		<>
			{/* Wait till tha data arrives */}
			{Object.keys(books).length !== 0 && (
				<div className={appStyle}>
					{showAdd === true &&
						((appStyle = appStyles.appUnscrollable),
						(
							<>
								{/* Dark overlay */}
								<div
									className={appStyles.darkOverlay}
									onClick={() => {
										setShowAdd(false);
										appStyle = appStyles.appScrollable;
									}}
								/>
								{/* Add component */}
								<Add
									exit={setShowAddFunc}
									booksData={allBooks}
									usersData={userBooks}
									lang={language}
								/>
							</>
						))}

					{showEdit === true &&
						((appStyle = appStyles.appUnscrollable),
						(
							<>
								{/* Dark overlay */}
								<div
									className={appStyles.darkOverlay}
									onClick={() => {
										setShowEdit(false);
										appStyle = appStyles.appScrollable;
									}}
								/>
								{/* Edit component */}
								<Edit
									exit={setShowEditFunc}
									booksData={allBooks[editBookID]}
									usersData={userBooks[editBookID]}
									bookID={editBookID}
									lang={language}
								/>
							</>
						))}
					{/* Header */}
					<div className={appStyles.header}>
						<div className={appStyles.menu}>
							{/* Logo */}
							<p unselectable="on">BookShelf</p>
							{/* Language selector */}
							<div className={appStyles.dropdown}>
								<div className={appStyles.activeLang}>
									<img
										src={language.flag}
										alt="languageFlag"
										className={appStyles.flag}
									/>
								</div>
								<div
									className={appStyles.lang}
									onClick={() => setLanguage(words.hu)}
								>
									<img
										src={huFlag}
										alt="huFlag"
										className={appStyles.flag}
									/>
								</div>
								<div
									className={appStyles.lang}
									id={appStyles.en}
									onClick={() => setLanguage(words.en)}
								>
									<img
										src={enFlag}
										alt="enFlag"
										className={appStyles.flag}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Content */}
					<div className={appStyles.content}>
						<div className={appStyles.options}>
							{/* Filters */}
							<div
								className={
									activeFilter !== "All"
										? appStyles.optionButtonActive
										: appStyles.optionButton
								}
								onClick={() => setActiveFilter(yearsArray[0])}
							>
								{language.annualBreakdown}
							</div>
							<div
								className={
									activeFilter === "All"
										? appStyles.optionButtonActive
										: appStyles.optionButton
								}
								onClick={() => setActiveFilter("All")}
							>
								{language.all}
							</div>
						</div>
						<div className={appStyles.divider} />
						{/* List of years */}
						{activeFilter !== "All" && (
							<div className={appStyles.years}>
								{yearsArray.map((keyName, key) => (
									<div key={key}>
										<div
											className={
												activeFilter === yearsArray[key]
													? appStyles.yearsFocus
													: appStyles.year
											}
											onClick={() => {
												setActiveFilter(
													yearsArray[key]
												);
												appStyle =
													appStyles.appScrollable;
											}}
										>
											<>{keyName}</>
										</div>
									</div>
								))}
							</div>
						)}
						{/* Number of results */}
						<div className={appStyles.bookResults}>
							<div className={appStyles.activeYear}>
								{activeFilter === "All"
									? language.all
									: activeFilter}
							</div>
							&nbsp;
							<div className={appStyles.resultsNumber}>
								{results}
							</div>
						</div>
						{
							/* Books Container */
							((results = 0), //reset the results number
							(
								<div className={appStyles.bookCovers}>
									{/* Show All books if we are on all, or only show years selected year books */}
									{Object.keys(books).map(
										(keyName, key) =>
											("All" === activeFilter ||
												books[keyName].finishDate.slice(
													0,
													4
												) === activeFilter) &&
											((results += 1),
											(
												// onClick open Edit component
												<div
													className={appStyles.book}
													key={key}
													onClick={() => {
														editBookID =
															books[keyName]
																.bookID;
														setShowEdit(true);
													}}
												>
													<img
														src={
															books[keyName].cover
														}
														alt="BookCover"
													/>
													{/* Stars */}
													<div>
														{[
															...Array(
																parseInt(
																	books[
																		keyName
																	].stars
																)
															),
														].map(() => "★")}
														{[
															...Array(
																5 -
																	parseInt(
																		books[
																			keyName
																		].stars
																	)
															),
														].map(() => "☆")}
													</div>
												</div>
											))
									)}
									<div
										// onClick open Add component
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
