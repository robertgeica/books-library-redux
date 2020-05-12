import React from 'react';
import './AddBookModal.scss';
import Modal from 'react-modal';

const AddBookModal = ({isOpen, handleCloseModal, addBookToLibrary}) => (


    <Modal
        isOpen={!!isOpen}

        contentLabel="Selected Recipe"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
    

        <form onSubmit={addBookToLibrary} >
        	<input placeholder="title" />
        	<input placeholder="author" />
        	<input placeholder="pages" />
        	<button type="submit">Add Book</button>
      	</form>
        
        <button 
            onClick={handleCloseModal}
            className="modalButton"
        >
            Close modal
        </button>




    </Modal>



);

export default AddBookModal;