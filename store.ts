import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./data/booksSlice";

export const store = configureStore({
  reducer: {
    bookList: booksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
