import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'


export const signupAction = createAsyncThunk(
    'auth/signupAction',
    async (payload) => {

    
       // An async function return a promise
        const data=await axios.post("https://dry-gorge-90450.herokuapp.com/auth/signup2",payload);
        return data;
      
    }
  )

  export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async (payload) => {

    
       // An async function return a promise
        const data=await axios.post("https://dry-gorge-90450.herokuapp.com/auth/login",payload);
        return data;
      
    }
  )


  export const dataAction = createAsyncThunk(
    'auth/dataAction',
    async () => {

    
       // An async function return a promise
        const data=await axios.get("https://dry-gorge-90450.herokuapp.com/user/data");
        return data;
      
    }
  )