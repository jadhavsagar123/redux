import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../thunks";


const initialState={
    books:[]
    
}




const bookSlice=createSlice({

    name:"book",
    initialState:initialState,
    reducers:{

// Actually be passing the actions that modify the state

    },
    // these are responsible for the data managment with async apis

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchBooks.fulfilled, (state, action) => {

          //  debugger;
            // in this action you will be getting the data from an api  instead
          // Add user to the state array
          state.books=action.payload.data.items
        })
      },



})

export const {addTodo,deleteTodo,editTodo} = bookSlice.actions;  // these are called by the frontend 

export default bookSlice.reducer;  // reducer is more of in state management