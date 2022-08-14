import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './Slice/DateSlice/dateSlice'
// ...
const store = configureStore({
  reducer: {
    date: dateSlice
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store