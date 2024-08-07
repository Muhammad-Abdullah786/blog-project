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
                // state.userData = action.payload         // you can write it as this too
        }
    }
})


export default authSlice.reducer