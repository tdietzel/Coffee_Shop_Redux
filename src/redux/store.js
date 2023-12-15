import { configureStore } from "@reduxjs/toolkit"
import shopControlReducer from './shopControlSlice'

export const store = configureStore({
  reducer: {
    shopControl: shopControlReducer
  }
});