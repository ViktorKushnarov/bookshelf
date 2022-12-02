import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_DATA } from "./data";
import type { BookDetailPropsType } from "../types";

const innitialBooks: BookDetailPropsType[] = DUMMY_DATA;

export const counterSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList: innitialBooks,
  },
  reducers: {
    deleteBook: (state, action) => {
      state.bookList = state.bookList.filter(
        (item) => item.isbn !== action.payload
      );
    },
    addBook: (state, action) => {
      state.bookList = [...action.payload, ...state.bookList];
    },
    editBook: (state, action) => {
      state.bookList = state.bookList.map((d, i) => {
        if (d.isbn === action.payload.isbn) {
          return (d = action.payload);
        } else {
          return d;
        }
      });
    },
  },
});

export const { deleteBook, addBook, editBook } = counterSlice.actions;
export default counterSlice.reducer;
