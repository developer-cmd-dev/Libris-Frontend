import {configureStore} from '@reduxjs/toolkit'
import BooksDataReducer from '../Features/BooksDataSlice'

export const store=configureStore({
    reducer:{
        booksData:BooksDataReducer
    }
})