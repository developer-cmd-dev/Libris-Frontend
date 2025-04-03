import { createSlice } from "@reduxjs/toolkit";




export const BooksDataSlice = createSlice({

    name:"BooksData",
    initialState:[],

    reducers:{
        handleBooksData:(state,action)=>{
            console.log(action.payload)
        }
    }



})


export const{handleBooksData}=BooksDataSlice.actions;
export default BooksDataSlice.reducer