// REDUCER -> Describe how action transform the state
// Check what action you did and update the store

const initState = [{id: 0, title: 'test', author: 'bbb', pages: 22}, 
                {id: 1, title: 'my title', author: 'unknown', pages: 23}];


const deleteBookReducer = (state = initState, action) => {
    
    switch(action.type) {

        case 'DELETE_BOOK':
            return state.filter((book) => book.id != action.id);
            
        default:
            return state;
    }

}

export default deleteBookReducer;