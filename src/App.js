import React, { useState } from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addBook, deleteBook, updateBook} from './actions/index';

import AddBookModal from './components/AddBookModal';
import BooksTable from './components/BooksTable';

const App = () => {

	const [displayModal, setDisplayModal] = useState(false);

	const handleOpenModal = () => {
		setDisplayModal(true);
	}

	const handleCloseModal = () => {
		setDisplayModal(false);
	}


	const booksLibrary = useSelector(state => state.addBookReducer);
	const dispatch = useDispatch();

	const addBookToLibrary = (e) => {
		e.preventDefault();

		if(!e.target.childNodes[0].value.trim()) {
			return
		}

		let title = e.target.childNodes[0].value;
		let author = e.target.childNodes[1].value;
		let pages = e.target.childNodes[2].value;
		
		dispatch(addBook(title, author, pages))
		e.target.childNodes[0].value = '';
		e.target.childNodes[1].value = '';
		e.target.childNodes[2].value = '';
	}


	const updateBookInLibrary = (e) => {
		e.preventDefault();
		let id = e.target.id;
		
		let title = e.target.childNodes[0].childNodes[0].value;
		let author = e.target.childNodes[0].childNodes[1].value;
		let pages = e.target.childNodes[0].childNodes[2].value;


		console.log(title, author, pages);

		dispatch(updateBook(id, title, author, pages));
		// dispatch(updateBook(id, 't', 'a', 'p'))

	}
	

	const handleDeleteBook = (e) => {
		e.preventDefault();
		let id = e.target.parentNode.id;

		dispatch(deleteBook(id));
	}


	


  	return (
		<div className="App">

			<AddBookModal 
				isOpen={displayModal}
				handleCloseModal={handleCloseModal}
				addBookToLibrary={addBookToLibrary}
			/>

			<div className="bar">

				<button 
					className="addButton" 
					onClick={handleOpenModal}
				>
					Add new book
				</button>

			</div>

			<div className="books-table">

				<BooksTable
					booksLibrary={booksLibrary}
					updateBookInLibrary={updateBookInLibrary}
					handleDeleteBook={handleDeleteBook}
				/>

			</div>

		</div>
  	)
}
export default App;


	// <form onSubmit={addBookToLibrary} >
	// 			<input placeholder="title" />
	// 			<input placeholder="author" />
	// 			<button type="submit">Add Book</button>
	// 	</form>

