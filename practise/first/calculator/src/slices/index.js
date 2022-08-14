import { createSlice } from '@reduxjs/toolkit'
import { fetchUser } from "../thunks";

const initialState = {
  value: [],
  users: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addition: (state,action) => {
      state.value.push(parseInt(action.payload.num1) + parseInt(action.payload.num2))
    },

},
extraReducers: (builder) => {
  
  builder.addCase(fetchUser.fulfilled, (state, action) => {

    state.users=action.payload.data.data
    
  })
},
})

export const { addition } = counterSlice.actions

export default counterSlice.reducer