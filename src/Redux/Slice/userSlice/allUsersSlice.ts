import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"


type initialStateType ={
    users : []|any,
    isLoding : boolean,
    message : string|null,
}

const initialState:initialStateType = {
    users : [],
    isLoding : false,
    message : null
}


// Get all Users
export const getAllUsers = createAsyncThunk("user/getAllUsers",async()=>{
    let token = localStorage.getItem("user")? localStorage.getItem("user") : null;
    token = token && JSON.parse(token);
  
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/user/get/all',
      headers: {
        token: token ? token : ""
      }
    };
   const response = await axios.request(options)
   return response.data
  
  })
// Delete Users
export const deleteUsers = createAsyncThunk("user/deleteUsers",async(id:string)=>{
    let token = localStorage.getItem("user")? localStorage.getItem("user") : null;
    token = token && JSON.parse(token);
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/user/delete/${id}`,
    headers: {
      token: token ? token : ""
    }
  };
  
   const response = await axios.request(options)
   return response.data

})

const allUserSlice = createSlice({
    name : "user",
    initialState ,
    reducers :{ 
      // Clear Msg
        
        },
    extraReducers: (builder)=>{
      // get all Users 
      builder.addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.message = "users get successfully"
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.message = "users can not be get"
        })
        builder.addCase(getAllUsers.pending, (state, action) => {
            
        })
      // delete user
      builder.addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter((user:any)=> user._id !== action.payload.id) 
        state.message = "users Delete successfully"
        })
        builder.addCase(deleteUsers.rejected, (state, action) => {
            state.message = "users can not be delete"
        })
        builder.addCase(deleteUsers.pending, (state, action) => {
            
        })
    }
})


export default allUserSlice.reducer