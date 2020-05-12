import addBookReducer from './addBook';
import updateBookReducer from './updateBook';
import deleteBookReducer from './deleteBook';
import {combineReducers} from 'redux';


// to add more reducers use combineReducers

const allReducers = combineReducers({
    addBookReducer,
    updateBookReducer,
    deleteBookReducer
})

export default allReducers;