import React, { useState } from 'react';
import './BooksTable.scss';
import UpdateBookModal from './UpdateBookModal';


const BooksTable = ({booksLibrary, updateBookInLibrary, handleDeleteBook}) => {
    return (
        <table>

			<TableHead />

			<TableBody 
				booksLibrary={booksLibrary}
				updateBookInLibrary={updateBookInLibrary}
				handleDeleteBook={handleDeleteBook}
			/>
		
		</table>
    )
};

const TableHead = () => (
	<thead>
		<tr>
			<th>ID</th>
			<th>Title</th>
			<th>Author</th>
			<th>Pages</th>
			<th>Actions</th>
		</tr>
	</thead>

);

const TableBody = ({booksLibrary, updateBookInLibrary, handleDeleteBook}) => {

	const [updateModal, setUpdateModal] = useState(false);
	const [updateId, setUpdateId] = useState(undefined);

	const handleOpenModal = (e) => {
		setUpdateModal(true);

		setUpdateId(e.target.parentNode.id);
	}

	const handleCloseModal = () => {
		setUpdateModal(false);
	}
	
	return (

		<tbody>
			<UpdateBookModal 
				isOpen={updateModal}
				handleCloseModal={handleCloseModal}
				updateBookInLibrary={updateBookInLibrary}
				updateId={updateId}	
				booksLibrary={booksLibrary}
			/>

			{



				booksLibrary.map((key, item) => {
					return (
						<tr id={key.id}
							key={key.id}
							
						>
							<td>{key.id}</td>
							<td>{key.title}</td>
							<td>{key.author}</td>
							<td>{key.pages}</td>
							<td onClick={handleOpenModal}>update</td>
							<td onClick={handleDeleteBook}>delete</td>
						</tr>
		
					)
				})
			}

		</tbody>
	)
}


export default BooksTable;