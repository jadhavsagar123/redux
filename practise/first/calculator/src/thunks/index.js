import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'



export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const data=await axios.get("https://dry-gorge-90450.herokuapp.com/user/data");
        return data;
        console.log(data)
      
    }
  )