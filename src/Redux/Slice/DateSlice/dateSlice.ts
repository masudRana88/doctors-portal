import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
    name : "date",
    initialState : {
        selectedDate: ''
    },
    reducers :{
        selectedDate : (state, actions)=>{
            state.selectedDate = actions.payload
        },
        
    }
})

export const {selectedDate,} = dateSlice.actions
export default dateSlice.reducer