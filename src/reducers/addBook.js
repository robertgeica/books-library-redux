// REDUCER -> Describe how action transform the state
// Check what action you did and update the store

const initState = [{id: 0, title: 'test', author: 'bbb', pages: 22}, 
                {id: 1, title: 'my title', author: 'unknown', pages: 23}];


const addBookReducer = (state = initState, action) => {
    
    switch(action.type) {

        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    author: action.author,
                    pages: action.pages,
                    complete: action.complete
                }
            ];

        case 'DELETE_BOOK':
            return state.filter((book) => book.id != action.id);



        case 'UPDATE_BOOK':
            return state.map((item, index) => {
                //find item with matching id

                if(item.id == action.payload.id) {

                    //return new obj
                    return {
                        ...item, // copyexisting item
                        title: action.payload.title,
                        author: action.payload.author,
                        pages: action.payload.pages
                    }
                }

                return item;
            });


            
        default:
            return state;
    }

}

export default addBookReducer;