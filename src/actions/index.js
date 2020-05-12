
export const addBook = (title, author, pages, complete) => {
    return {
        type: 'ADD_BOOK',
        id: Date.now(),
        title,
        author,
        pages,
        complete: false
    }
}

export const deleteBook = (id) => {
    return {
        type: 'DELETE_BOOK',
        id
    }
}

export const updateBook = (id, title, author, pages) => {
    return {
        type: 'UPDATE_BOOK',
        payload: {
            id,
            title,
            author,
            pages
        }
    }
}