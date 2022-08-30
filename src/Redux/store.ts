import { configureStore } from '@reduxjs/toolkit'
import allAppointmentSlice from './Slice/AppoinmentSlice/allAppointmentSlice'
import createAppoinmentSlice from './Slice/AppoinmentSlice/createAppoinmentSlice'
import userAppoinmentSlice from './Slice/AppoinmentSlice/userAppoinmentSlice'
import dateSlice from './Slice/DateSlice/dateSlice'
import userSlice from './Slice/userSlice/userSlice'
// ...
const store = configureStore({
  reducer: {
    date: dateSlice,
    user: userSlice,
    bookAppoinment : createAppoinmentSlice,
    userAppoinment : userAppoinmentSlice,
    allAppointments: allAppointmentSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}

export default store