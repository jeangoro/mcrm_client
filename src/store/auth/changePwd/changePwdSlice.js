import {createSlice, createAction} from '@reduxjs/toolkit'

export const changePwdRequest = createAction('changePwd/changePwdRequest')
export const changePwdSuccess = createAction('changePwd/changePwdSuccess')
export const changePwdFailed = createAction('changePwd/changePwdFailed')

const initialState = {
    destination: null,
    deliveryMedium: null,

    changePwdLoading: false,
    changePwdSuccess: false,
    changePwdError: null
}


export const ChangePwdSlice = createSlice({
    name: 'changePwd',
    initialState,
    reducers: {

        // Register
        changePwdRequest: (state) => {
            state.changePwdLoading = true;
            state.changePwdSuccess = false;
            state.changePwdError = null;
            state.destination = null;
            state.deliveryMedium = null;
        },
        changePwdSuccess: (state, action) => {
            state.changePwdLoading = false;
            state.changePwdSuccess = true;
            state.changePwdError = null;
            state.destination = action.payload && action.payload.destination;
            state.deliveryMedium = action.payload && action.payload.deliveryMedium;
        },
        changePwdFailed: (state, action) => {
            state.changePwdLoading = false;
            state.changePwdSuccess = true;
            state.destination = null;
            state.deliveryMedium = null;
            state.changePwdError = action.payload && action.payload.error
        },

    },
    extraReducers: (builder) => {
    },
})

export default ChangePwdSlice.reducer