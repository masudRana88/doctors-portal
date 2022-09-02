import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type initialStateType ={
    appointments : [] | any,  
    isLoading : boolean,
    message : string,
}

const initialState:initialStateType ={
    appointments : [],
    isLoading : false,
    message : '',
}

// get user all appointments
export const getUserAppointments = createAsyncThunk("userAppoinment/get",async(id:string) =>{
    const options = {
    method: 'GET',
    url: `https://secure-fortress-70724.herokuapp.com/appointment/${id}`
    };

   const response = await axios.request(options)
   return response.data
})
// Delete user appointments
export const deleteUserAppointments = createAsyncThunk("userAppoinment/delete",async(id:string) =>{
    const options = {
    method: 'DELETE',
    url: `https://secure-fortress-70724.herokuapp.com/appointment/delete/${id}`
    };

   const deleteUserAppointments = await axios.request(options)
   console.log(deleteUserAppointments)
   const isDelate = deleteUserAppointments.data.deletedCount
   if(isDelate){
    return id
   }
})

const userAppoinmentSlice = createSlice({
    name : "userAppoinment",
    initialState, 
    reducers :{
        clearAppointmentMsg: (state) =>{
            state.message = ""
        }
     },
    extraReducers: (builder)=>{
        // ================== get userAppoinment =====================
        builder.addCase(getUserAppointments.fulfilled, (state, action) => {
            state.appointments = action.payload
            state.isLoading = false;
        })
        builder.addCase(getUserAppointments.rejected, (state, action) => {
            state.appointments = []
            state.isLoading = false;
            state.message = ""
        })
        builder.addCase(getUserAppointments.pending, (state, action) => {
            state.appointments = []
            state.isLoading = true;
            state.message = ""
        })
        // ================== get user Appoinment =====================
        builder.addCase(deleteUserAppointments.fulfilled, (state, action) => {
            state.appointments = state.appointments.filter((appoint:any) => appoint._id !== action.payload)
            state.message = "Appointment Cancle successfully ";
            state.isLoading = false;
        })
        builder.addCase(deleteUserAppointments.rejected, (state, action) => {
            state.message = "Delete failed, please try again."
            state.isLoading = false;
        })
        builder.addCase(deleteUserAppointments.pending, (state, action) => {
            state.isLoading = true;
        })
    }    
})
export const {clearAppointmentMsg,} = userAppoinmentSlice.actions
export default userAppoinmentSlice.reducer