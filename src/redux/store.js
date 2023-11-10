import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/RootApi/apiSlice'
import authSlice from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    user: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})