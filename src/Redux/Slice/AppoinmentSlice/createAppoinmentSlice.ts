import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type appointmentData = {
    name: string,
    email: string,
    phone: null| number,
    userId: string,
    date : string,
    time : string,
    serviceName :string,
    message : string,
    isLoding : boolean,
}


const initialState:appointmentData = {
    name: "",
    email: "",
    phone: null,
    userId: "",
    date : "",
    time : "",
    serviceName :"",
    message : "",
    isLoding : false,
}


export const makeAppointment = createAsyncThunk("createAppoinment/make", async(data:any)=>{

const options = {
  method: 'POST',
  url: 'https://secure-fortress-70724.herokuapp.com/appointment/create',
  data: {
    email: data.email,
    name: data.name,
    userId: data.userId,
    phone: data.phone,
    date: data.date,
    serviceName: data.serviceName,
    time: data.time,
  }
};

    const response = await axios.request(options)
    return response.data

})

const createAppoinmentSlice = createSlice({
    name : "bookAppoinment",
    initialState, 
    reducers :{ },
    extraReducers: (builder)=>{
        builder.addCase(makeAppointment.fulfilled, (state, action) => {
           state.name = action.payload.name;
           state.email = action.payload.email;
           state.phone = action.payload.phone;
           state.date = action.payload.date;
           state.time = action.payload.time;
           state.serviceName = action.payload.serviceName;
           state.userId = action.payload.userId;
           state.message = action.payload.message;
           state.isLoding = false;
        })
        builder.addCase(makeAppointment.pending, (state, action) => {
           state.name = "";
           state.email = "";
           state.phone = null;
           state.date = "";
           state.time = "";
           state.serviceName = "";
           state.userId = "";
           state.message = "";
           state.isLoding = true;
        })
        builder.addCase(makeAppointment.rejected, (state, action) => {
           state.name = "";
           state.email = "";
           state.phone = null;
           state.date = "";
           state.time = "";
           state.serviceName = "";
           state.userId = "";
           state.message = "Appointment booking failed, please try again !!";
           state.isLoding = true;
        })
    }
})

export default createAppoinmentSlice.reducer