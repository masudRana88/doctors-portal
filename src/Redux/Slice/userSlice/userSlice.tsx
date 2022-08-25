import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"


// type

type bodyData = {
    email: string,
    password: number| string,
    name : string,
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
    message : string |null,
    address: string|null,
    phone: number|null,
}

// get JWT from localStorage
const token : string = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')||"") : "";

// states 
const initialState: initialStateUser ={
    id : "",
    name : "",
    email:"",
    address : null,
    phone: null,
    jwt: token,
    isLoding : false,
    isAdmin: false,
    message: null,
}

// singUP with email , password and name
export const singUpUser = createAsyncThunk("user/sungUp",async(userData:bodyData)=>{
    const options = {
    method: 'POST',
    url: 'http://localhost:5000/user/singup',
    data: {email: userData.email, password: userData.password, name: userData.name}
    };

   const user = await axios.request(options)
   localStorage.setItem("user", JSON.stringify(user.data.jwt))
   return user
    
})
// Login user with email and password
export const loginUser = createAsyncThunk("user/login",async(data:any)=>{
    const user = await axios.post("http://localhost:5000/user/login/",data )
    localStorage.setItem("user", JSON.stringify(user.data.jwt))
    return user
})


// login with JWT
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

// Update user 

export const updateUser = createAsyncThunk("user/update",async(data:any)=>{
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/user/update',
    data: {
      email: data.email,
      name: data.name,
      phone: data.phone,
      address: data.address,
      id: data.id,
    }
  };
  
  const user = await axios.request(options)
  return user;
  
})
const userSlice = createSlice({
    name : "user",
    initialState ,
    reducers :{ 
      // Clear Msg
        clearUserMsg : (state)=>{
            state.message = null
        },
        // Logout User
        logoutUser: (state)=>{
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = ''
            state.isLoding = false
            state.phone = null;
            state.address = "";
        },
    },
    extraReducers: (builder)=>{
        // sing UP user  =============================================================
        builder.addCase(singUpUser.fulfilled, (state, action) => {
            state.email = action.payload.data.email
            state.id = action.payload.data.id
            state.isAdmin = action.payload.data.isAdmin
            state.jwt = action.payload.data.jwt
            state.name = action.payload.data.name;
            state.phone = action.payload.data.phone;
            state.address = action.payload.data.address;
            state.message = action.payload.data.message
            state.isLoding = false
          })
        builder.addCase(singUpUser.pending, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = ''
            state.isLoding = true
          })
        builder.addCase(singUpUser.rejected, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = "Can not be login User!! Please try again..."
            state.isLoding = false
          })
        // Login user with email and password =============================================================
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.email = action.payload.data.email
            state.id = action.payload.data.id
            state.isAdmin = action.payload.data.isAdmin
            state.phone = action.payload.data.phone;
            state.address = action.payload.data.address;
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
        //   Login with jwt token =============================================================
        builder.addCase(loginUserWithToken.fulfilled, (state, action) => {
            state.email = action.payload.data.email
            state.id = action.payload.data.id
            state.isAdmin = action.payload.data.isAdmin
            state.jwt = action.payload.data.jwt
            state.phone = action.payload.data.phone;
            state.address = action.payload.data.address;
            state.name = action.payload.data.name;
            state.message = null
            state.isLoding = false
        })
        builder.addCase(loginUserWithToken.pending, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = ''
            state.isLoding = true
          })
        builder.addCase(loginUserWithToken.rejected, (state, action) => {
            state.email = ""
            state.id = ""
            state.isAdmin = false
            state.jwt = ''
            state.name = '';
            state.message = "Unathorized login failed"
            state.isLoding = false
          })
        // update usee =============================================================
        builder.addCase(updateUser.fulfilled, (state, action) => {
          state.email = action.payload.data.email
          state.phone = action.payload.data.phone;
          state.address = action.payload.data.address;
          state.name = action.payload.data.name;
          state.message = "user is update !!"
          state.isLoding = false
      })
      builder.addCase(updateUser.pending, (state, action) => {
          state.message = ''
          state.isLoding = true
        })
      builder.addCase(updateUser.rejected, (state, action) => {
          state.message = "Unathorized login failed"
          state.isLoding = false
        })
    }
})

export const {clearUserMsg,logoutUser} = userSlice.actions
export default userSlice.reducer

