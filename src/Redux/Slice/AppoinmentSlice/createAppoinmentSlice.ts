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
  url: 'http://localhost:5000/appointment/create',
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
           state.isLoding = false;
           state.message = action.payload.message;
           state.userId = action.payload.userId;
        })
    }
})

export default createAppoinmentSlice.reducer