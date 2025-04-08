import { createSlice } from "@reduxjs/toolkit";





export const BooksDataSlice = createSlice({

    name: "BooksData",
    initialState: {
        "title": null,
        "authors": [],
        "summaries": [],
        "translators": [],
        "subjects": [],
        "bookshelves": [],
        "languages": [],
        "copyright": null,
        "price": null,
        "formats": {},
        "id": null,
        "media_type": null,
        "download_count": null
    },


    reducers: {
        handleBooksData: (state, action) => {
            state.title = action.payload.title || null;
            state.authors = action.payload.authors || [];
            state.summaries = action.payload.summaries || [];
            state.translators = action.payload.translators || [];
            state.subjects = action.payload.subjects || [];
            state.bookshelves = action.payload.bookshelves || [];
            state.languages = action.payload.languages || [];
            state.copyright = action.payload.copyright || null;
            state.price = action.payload.price || null;
            state.formats = action.payload.formats || {};
            state.id = action.payload.id || null;
            state.media_type = action.payload.media_type || null;
            state.download_count = action.payload.download_count || null;
        }
    }



})


export const { handleBooksData } = BooksDataSlice.actions;
export default BooksDataSlice.reducer