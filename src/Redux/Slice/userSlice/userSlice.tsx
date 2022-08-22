import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"


// type

type bodyData = {
    email: string,
    password: number| string,
}
type geteUserData = {
    data :{
    id: string,
    name: string,
    email: string,
    jwt: string,
    isAdmin: boolean,
    message : null| string
    }
}
type initialStateUser ={
    id: string,
    name: string,
    email: string,
    jwt: string|null,
    isAdmin: boolean,
    isLoding: Boolean,
    message : string |null
}

// get JWT from localStorage
const token : string = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')||"") : "";

// states 
const initialState: initialStateUser ={
    id : "",
    name : "",
    email:"",
    jwt: token,
    isLoding : false,
    isAdmin: false,
    message: null,
}

export const loginUser = createAsyncThunk("user/login",async(data:any)=>{
    const user = await axios.post("http://localhost:5000/user/login/",data )
    localStorage.setItem("user", JSON.stringify(user.data.jwt))
    return user
})
export const loginUserWithToken = createAsyncThunk("user/login/token",async(data:any|string)=>{
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/user/login/token',
      headers: {
        token: data
      }
    };
    
    const user = await axios.request(options)
    return user

})

const userSlice = createSlice({
    name : "user",
    initialState ,
    reducers :{ 
        clearUserMsg : (state)=>{
            state.message = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.email = action.payload.data.email
            state.id = action.payload.data.id
            state.isAdmin = action.payload.data.isAdmin
            state.jwt = action.payload.data.jwt
            state.name = action.payload.data.name;
            state.message = action.payload.data.message
            state.isLoding = false
          })
        builder.addCase(loginUser.pending, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = ''
            state.isLoding = true
          })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = "Can not be login User!! Please try again..."
            state.isLoding = false
          })
        builder.addCase(loginUserWithToken.fulfilled, (state, action) => {
            state.email = action.payload.data.email
            state.id = action.payload.data.id
            state.isAdmin = action.payload.data.isAdmin
            state.jwt = action.payload.data.jwt
            state.name = action.payload.data.name;
            state.message = null
            state.isLoding = false
        })
    }
})

export const {clearUserMsg} = userSlice.actions
export default userSlice.reducer

