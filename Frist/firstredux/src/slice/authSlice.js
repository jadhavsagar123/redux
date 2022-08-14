import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  values: [],
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    addToDo: (state, action) => {
      console.log(state.values.push(action.payload))
    },
  },
})

export const { addToDo } = authSlice.actions

export default authSlice.reducer