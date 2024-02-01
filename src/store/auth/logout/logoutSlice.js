import {createSlice, createAction} from '@reduxjs/toolkit'

export const logoutRequest = createAction('logout/logoutRequest')
export const logoutSuccess = createAction('logout/logoutSuccess')
export const logoutFailed = createAction('logout/logoutFailed')


const initialState = {

    logoutError: null,
    logoutLoading: false,
    logoutSuccess: false,
}


export const LogoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {

        // Logout
        logoutRequest: (state) => {
            state.logoutLoading = true;
            state.logoutSuccess = false;
            state.logoutError = null;
        },
        logoutSuccess: (state, action) => {
            state.logoutLoading = false;
            state.logoutSuccess = true;
            state.logoutError = null;
        },
        logoutFailed: (state, action) => {
            state.logoutLoading = false;
            state.logoutSuccess = true;
            state.logoutError = action.payload && action.payload.error
        },
    },
    extraReducers: (builder) => {
    },
})

export default LogoutSlice.reducer