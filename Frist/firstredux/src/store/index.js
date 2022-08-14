import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../slice'
import authSlice from '../slice/authSlice'


export const store = configureStore({
  reducer: {
    counterSlice:counterSlice,
    authSlice:authSlice,

  },
})