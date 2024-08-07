import { createSlice } from '@reduxjs/toolkit';

// initial state always an object
const initialState = {
    status: false,
    userData: null,
}

// define slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => { }
    }
})


export default authSlice.reducer