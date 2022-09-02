import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type initialStateType ={
    appointments : []|any,
    isLoding : boolean,
    message : null|string,
}

const initialState:initialStateType ={
    appointments : [],
    isLoding : false,
    message : null,
}

// Get All Appoinment
export const getAllAppointments = createAsyncThunk("allAppointments/get",async() =>{
    let token = localStorage.getItem("user")? localStorage.getItem("user") : null;
    token = token && JSON.parse(token);
    const options= {
    method: 'GET',
    url: 'http://localhost:5000/appointment/get/all/',
    headers: {
        token: token ? token : ""
    }
    };

    const responce = await axios.request(options)
    return responce.data;
})
// Delete user appointments
export const deleteAppointments = createAsyncThunk("allAppointmentSlice/delete",async(id:string) =>{
    const options = {
    method: 'DELETE',
    url: `http://localhost:5000/appointment/delete/${id}`
    };

   const deleteUserAppointments = await axios.request(options)
   const isDelate = deleteUserAppointments.data.deletedCount
   if(isDelate){
    return id
   }
})
// update user appointments status
export const updateAppointMentStatus = createAsyncThunk("allAppointmentSlices/update/status",async(data:any) =>{
    let token = localStorage.getItem("user")? localStorage.getItem("user") : null;
    token = token && JSON.parse(token);
    const options = {
    method: 'PUT',
    url: `http://localhost:5000/appointment/update/status/${data.id}`,
    headers: {
        token: token ? token : ""
    },
    data: {status: data.status}
    };

    const res = await axios.request(options)
    return data
})
const allAppointmentSlice= createSlice({
    name : 'allAppointments',
    initialState,
    reducers :{ },
    extraReducers: (builder)=>{
        builder.addCase(getAllAppointments.fulfilled, (state, action) => {
            state.appointments = action.payload;
            state.isLoding = false;
        })
        builder.addCase(getAllAppointments.rejected, (state, action) => {
            state.appointments = [];
            state.message = "Can not Find All Appointments, please try again later.";
            state.isLoding = false;
        })
        builder.addCase(getAllAppointments.pending, (state, action) => {
            state.appointments = [];
            state.message = "";
            state.isLoding = true
        })
        // gelete appoinment
        builder.addCase(deleteAppointments.fulfilled, (state, action) => {
            state.appointments = state.appointments.filter((appoint:any) => appoint._id !== action.payload)
            state.message = "Appointment Cancle successfully ";
            state.isLoding = false;
        })
        builder.addCase(deleteAppointments.rejected, (state, action) => {
            state.message = "Appointment Cancle Failed!! "
            state.isLoding = false;
        })
        builder.addCase(deleteAppointments.pending, (state, action) => {
            state.message = ""
            state.isLoding = true;
        })
        // update appoinment state
        builder.addCase(updateAppointMentStatus.fulfilled, (state, action) => {
            state.message = "Appointment update successfully ";
            state.appointments = state.appointments.map((appoint:any) => appoint._id === action.payload.id? {...appoint, status: action.payload.status}: appoint)
            state.isLoding = false;
        })
        builder.addCase(updateAppointMentStatus.rejected, (state, action) => {
            state.message = "Appointment can not updated, Please try again !!"
            state.isLoding = false;
        })
        builder.addCase(updateAppointMentStatus.pending, (state, action) => {
            state.isLoding = true;
        })
    },

})

export default allAppointmentSlice.reducer