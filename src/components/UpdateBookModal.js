import React from 'react';
import './AddBookModal.scss';
import Modal from 'react-modal';



const UpdateBookModal = ({isOpen, handleCloseModal, updateBookInLibrary, updateId, booksLibrary}) => (


    <Modal
        isOpen={!!isOpen}

        contentLabel="Selected Recipe"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
    

        <form onSubmit={updateBookInLibrary} id={updateId}>
        {
            booksLibrary.map(item => {

                if(item.id == updateId) {
                    return (
                     <div key="mdfk">
                        <input placeholder="title" defaultValue={item.title} />
                        <input placeholder="author" defaultValue={item.author} />
                        <input placeholder="pages" defaultValue={item.pages} />
                        <button type="submit">Update Book</button>
                    </div>
                )   
                }
                 
            
               
            })
        }

      	</form>
        
        <button 
            onClick={handleCloseModal}
            className="modalButton"
        >
            Close modal
        </button>




    </Modal>



);

export default UpdateBookModal;