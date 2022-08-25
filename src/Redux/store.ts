import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './Slice/DateSlice/dateSlice'
import userSlice from './Slice/userSlice/userSlice'
// ...
const store = configureStore({
  reducer: {
    date: dateSlice,
    user: userSlice
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