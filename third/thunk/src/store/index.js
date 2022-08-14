import { configureStore } from '@reduxjs/toolkit'
import bookSlice from "../slice/book";


export const store = configureStore({
  reducer: {
    bookSlice:bookSlice

  },
})