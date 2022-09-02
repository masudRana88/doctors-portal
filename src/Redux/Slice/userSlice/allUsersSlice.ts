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

// update users type
export const updateUsersType = createAsyncThunk("user/updateUsersType",async(data:any)=>{
    let token = localStorage.getItem("user")? localStorage.getItem("user") : null;
    token = token && JSON.parse(token);
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/user/update/type',
      headers: {
        token: token ? token : ""
      },
      data: {type: data.type, id: data.id},
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
          state.message = "users get successfully";
          state.isLoding = false;
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.message = "users can not Find, please try again later.";
            state.isLoding = false;
        })
        builder.addCase(getAllUsers.pending, (state, action) => {
          state.isLoding = true;
        })
      // delete user
      builder.addCase(deleteUsers.fulfilled, (state, action) => {
          state.users = state.users.filter((user:any)=> user._id !== action.payload.id) 
          state.message = "users Delete successfully";
          state.isLoding = false;
        })
        builder.addCase(deleteUsers.rejected, (state, action) => {
          state.message = "users can not be delete";
          state.isLoding = false;
        })
        builder.addCase(deleteUsers.pending, (state, action) => {
          state.isLoding = true;
        })
      // update  user type
      builder.addCase(updateUsersType.fulfilled, (state, action) => {
          state.users = state.users.map((user:any)=> user._id === action.payload.id ? {...user, isAdmin: action.payload.type === "true" ? true : false}: user)
          state.message = "users update successfully"
          state.isLoding = false
        })
        builder.addCase(updateUsersType.rejected, (state, action) => {
            state.message = "users can not be updateed"
            state.isLoding = false
        })
        builder.addCase(updateUsersType.pending, (state, action) => {
            state.isLoding = true
        })
    }
})


export default allUserSlice.reducer