import {createSlice, createAction} from '@reduxjs/toolkit'

export const registerRequest = createAction('register/registerRequest')
export const registerSuccess = createAction('register/registerSuccess')
export const registerFailed = createAction('register/registerFailed')

export const confirmRequest = createAction('register/confirmRequest')
export const confirmSuccess = createAction('register/confirmSuccess')
export const confirmFailed = createAction('register/confirmFailed')

export const resendConfirmationCodeRequest = createAction('register/resendConfirmationCodeRequest')
export const resendConfirmationCodeSuccess = createAction('register/resendConfirmationCodeSuccess')
export const resendConfirmationCodeFailed = createAction('register/resendConfirmationCodeFailed')

const initialState = {
    userConfirmed: false,
    deliveryMedium: null,
    destination: null,
    invalidCode: false,
    codeSent: false,
    email: null,
    userAlreadyExist: false,


    registerLoading: false,
    registerSuccess: false,
    registerError: null,

    confirmLoading: false,
    confirmSuccess: false,
    confirmError: null,

    resendConfirmationCodeLoading: false,
    resendConfirmationCodeSuccess: false,
    resendConfirmationCodeError: null,
}


export const RegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

        // Register
        registerRequest: (state) => {
            state.registerLoading = true;
            state.registerSuccess = false;
            state.registerError = null;
            state.userConfirmed = false;
            state.deliveryMedium = null;
            state.destination = null;
        },
        registerSuccess: (state, action) => {
            state.registerLoading = false;
            state.registerSuccess = true;
            state.registerError = null;
            state.userConfirmed = action.payload && action.payload.userConfirmed
            state.destination = action.payload && action.payload.destination
            state.deliveryMedium = action.payload && action.payload.deliveryMedium
            state.email = action.payload && action.payload.email
            state.userAlreadyExist = false;
        },
        registerFailed: (state, action) => {
            state.registerLoading = false;
            state.registerSuccess = true;
            state.userConfirmed = false;
            state.deliveryMedium = null;
            state.destination = null;
            if (action.payload && action.payload.errorMessage){
                state.registerError = action.payload && action.payload.errorMessage
            } else {
                state.registerError = action.payload && action.payload.error
            }
            state.userAlreadyExist = action.payload && action.payload.userAlreadyExist;
        },

        // Confirm
        confirmRequest: (state) => {
            state.confirmLoading = true;
            state.confirmSuccess = false;
            state.confirmError = null;
        },
        confirmSuccess: (state, action) => {
            state.confirmLoading = false;
            state.confirmSuccess = true;
            state.confirmError = null;
            state.userConfirmed = true;
            state.invalidCode = false;
            state.deliveryMedium = null;
            state.destination = null;
            state.email = action.payload && action.payload.email
        },
        confirmFailed: (state, action) => {
            state.confirmLoading = false;
            state.confirmSuccess = false;
            if (action.payload && action.payload.errorMessage) {
                state.confirmError = action.payload && action.payload.errorMessage
                state.invalidCode = action.payload && action.payload.invalidCode
            } else {
                state.confirmError = action.payload && action.payload.error
            }
        },

        // ResendConfirmationCode
        resendConfirmationCodeRequest: (state) => {
            state.resendConfirmationCodeLoading = true;
            state.resendConfirmationCodeSuccess = false;
            state.resendConfirmationCodeError = null;
            state.codeSent = false;
        },
        resendConfirmationCodeSuccess: (state, action) => {
            state.resendConfirmationCodeLoading = false;
            state.resendConfirmationCodeSuccess = true;
            state.resendConfirmationCodeError = null;
            state.codeSent = action.payload && action.payload.codeSent
            state.deliveryMedium = action.payload && action.payload.deliveryMedium
            state.destination = action.payload && action.payload.destination
            state.email = action.payload && action.payload.email;
        },
        resendConfirmationCodeFailed: (state, action) => {
            state.resendConfirmationCodeLoading = false;
            state.resendConfirmationCodeSuccess = true;
            state.codeSent = false;
            if (action.payload && action.payload.errorMessage) {
                state.resendConfirmationCodeError = action.payload && action.payload.errorMessage
            } else {
                state.resendConfirmationCodeError = action.payload && action.payload.error
            }
        },

    },
    extraReducers: (builder) => {
    },
})

export default RegisterSlice.reducer