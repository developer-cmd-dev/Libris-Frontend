import {configureStore} from '@reduxjs/toolkit'
import BooksDataReducer from '../Features/BooksDataSlice'
import AuthenticationReducer from '../Features/AuthenticationSlice'
import LoadingReducer from '../Features/LoadingSlice'


export const store=configureStore({
    reducer:{
        booksData:BooksDataReducer,
        authentication:AuthenticationReducer,
        loading:LoadingReducer,
    }
})