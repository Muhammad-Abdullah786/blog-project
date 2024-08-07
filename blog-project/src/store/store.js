import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../feature/authSlice";



const store = configureStore({
    reducer: {
        // Define your reducers here
        // auth: authSlice,
    }
})

export default store;