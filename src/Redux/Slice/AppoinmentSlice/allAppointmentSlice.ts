import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type initialStateType ={
    appointments : []|any,
    isLoding : boolean,
    message : null|string,
}
type myOptions= {
    method: string;
    url: string;
    headers: {
        token: any;
    };
}
const initialState:initialStateType ={
    appointments : [],
    isLoding : false,
    message : null,
}

// Get All Appoinment
export const getAllAppointments = createAsyncThunk("allAppointments/get",async() =>{
    const token = await localStorage.getItem('user');
    const options:myOptions = {
    method: 'GET',
    url: 'http://localhost:5000/appointment/get/all/',
    headers: {
        token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDRkNjcyMGE4Mzc3YTQxYThkN2NlNyIsImlhdCI6MTY2MTY3Mjg4NywiZXhwIjoxNjY0MjY0ODg3fQ.zD9H9RlI8-nveHWHu1kr3YfPulHS1YqSwfgdypic5N0"
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

const allAppointmentSlice= createSlice({
    name : 'allAppointments',
    initialState,
    reducers :{ },
    extraReducers: (builder)=>{
        builder.addCase(getAllAppointments.fulfilled, (state, action) => {
            state.appointments = action.payload;
        })
        // gelete appoinment
        builder.addCase(deleteAppointments.fulfilled, (state, action) => {
            state.appointments = state.appointments.filter((appoint:any) => appoint._id !== action.payload)
            state.message = "Appointment Cancle successfully "
        })
        builder.addCase(deleteAppointments.rejected, (state, action) => {
           
        })
        builder.addCase(deleteAppointments.pending, (state, action) => {
            
        })
    },

})

export default allAppointmentSlice.reducer