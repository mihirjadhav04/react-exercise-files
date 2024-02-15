import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userStatus: false,
    userData: null
}

//here we are tracking only user's login and logout status in the store.
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userStatus = true;
            state.userData = action.payload.userData        
        },
        logout: (state) => {
            state.userStatus = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
