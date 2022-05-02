import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Features/userSlice'
import appReducer from './Features/appSlice'

export default configureStore({
  reducer: {
    counter: userReducer,
    app: appReducer,
  },
})