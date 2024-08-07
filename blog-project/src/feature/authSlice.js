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
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData
        }
    }
})


export default authSlice.reducer