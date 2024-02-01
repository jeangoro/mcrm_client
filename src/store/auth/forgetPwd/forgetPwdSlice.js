import {createSlice, createAction} from '@reduxjs/toolkit'

export const forgotPwdRequest = createAction('forgotPwd/forgotPwdRequest')
export const forgotPwdSuccess = createAction('forgotPwd/forgotPwdSuccess')
export const forgotPwdFailed = createAction('forgotPwd/forgotPwdFailed')

export const confirmForgotPwdRequest = createAction('forgotPwd/confirmForgotPwdRequest')
export const confirmForgotPwdSuccess = createAction('forgotPwd/confirmForgotPwdSuccess')
export const confirmForgotPwdFailed = createAction('forgotPwd/confirmForgotPwdFailed')


const initialState = {
    deliveryMedium: null,
    destination: null,
    invalidCode: false,
    email: null,

    forgotPwdLoading: false,
    forgotPwdSuccess: false,
    forgotPwdError: null,

    confirmForgotPwdLoading: false,
    confirmForgotPwdSuccess: false,
    confirmForgotPwdError: null,
}


export const ForgetPwdSlice = createSlice({
    name: 'forgotPwd',
    initialState,
    reducers: {

        forgotPwdRequest: (state) => {
            state.forgotPwdLoading = true;
            state.forgotPwdSuccess = false;
            state.forgotPwdError = null;
            state.deliveryMedium = null;
            state.destination = null;
        },
        forgotPwdSuccess: (state, action) => {
            state.forgotPwdLoading = false;
            state.forgotPwdSuccess = true;
            state.forgotPwdError = null;
            state.destination = action.payload && action.payload.destination
            state.deliveryMedium = action.payload && action.payload.deliveryMedium
            state.email = action.payload && action.payload.email
        },
        forgotPwdFailed: (state, action) => {
            state.forgotPwdLoading = false;
            state.forgotPwdSuccess = true;
            state.deliveryMedium = null;
            state.destination = null;
            state.forgotPwdError = action.payload && action.payload.error
        },


        confirmForgotPwdRequest: (state) => {
            state.confirmForgotPwdLoading = true;
            state.confirmForgotPwdSuccess = false;
            state.confirmForgotPwdError = null;
        },
        confirmForgotPwdSuccess: (state, action) => {
            state.confirmForgotPwdLoading = false;
            state.confirmForgotPwdSuccess = true;
            state.confirmForgotPwdError = null;
            state.deliveryMedium = null;
            state.destination = null;
            state.invalidCode = false;
            state.email = action.payload && action.payload.email
        },
        confirmForgotPwdFailed: (state, action) => {
            state.confirmForgotPwdLoading = false;
            state.confirmForgotPwdSuccess = false;
            if (action.payload && action.payload.error) {
                state.confirmForgotPwdError = action.payload && action.payload.error
            } else if (action.payload && action.payload.errorMessage) {
                state.confirmForgotPwdError = action.payload && action.payload.errorMessage
                state.invalidCode = action.payload && action.payload.invalidCode
            } else {
                state.confirmForgotPwdError = action.payload && action.payload.error
            }
        },

    },
    extraReducers: (builder) => {
    },
})

export default ForgetPwdSlice.reducer