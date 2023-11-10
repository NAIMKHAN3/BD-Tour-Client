import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    _id: null,
  name: null,
  email: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userAdded: (state, {payload}) => {
     state._id = payload._id;
     state.name = payload.name;
     state.email = payload.email;
    },
    removeUser: (state, {payload}) => {
        state._id = null;
        state.name = null;
        state.email = null;
    },
    
  },
})

export const {userAdded, removeUser } = authSlice.actions

export default authSlice.reducer