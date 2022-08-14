import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../thunks";


const initialState={
    books:[]
    
}




const todoSlice=createSlice({

    name:"todo",
    initialState:initialState,
    reducers:{

// Actually be passing the actions that modify the state

addTodo:(state,action)=>{



    //action.payloar contains the data coming from your frontend 

    state.todos.push(action.payload)

}
,// Create a action that deletes todo from the array and call it from frontend

deleteTodo:(state,action)=>{

    state.todos=state.todos.filter(ele=>ele.id!=action.payload);

},

// Create an action  for editing 
// Populate the input field in frontend 


editTodo:(state,action)=>{

 
    // Apply some logic of editing 

    state.todos=state.todos.filter(ele=>ele.id!=action.payload.id);
    state.todos.push(action.payload);

}

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

export const {addTodo,deleteTodo,editTodo} = todoSlice.actions;  // these are called by the frontend 

export default todoSlice.reducer;  // reducer is more of in state management