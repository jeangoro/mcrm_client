import { createSlice, createAction } from "@reduxjs/toolkit";
import { loginRequest, loginSuccess, loginFailed } from "../login/loginSlice";

export const getAccountRequest = createAction("authentication/getAccountRequest");
export const getAccountSuccess = createAction("authentication/getAccountSuccess");
export const getAccountFailed = createAction("authentication/getAccountFailed");

export const getRememberMeRequest = createAction("authentication/getRememberMeRequest");
export const getRememberMeSuccess = createAction("authentication/getRememberMeSuccess");
export const getRememberMeFailed = createAction("authentication/getRememberMeFailed");

export const clearAuthData = createAction("authentication/clearAuthData");
export const clearRememberMeData = createAction("authentication/clearRememberMeData");
export const networkError = createAction("authentication/networkError");

export const getUserStatusRequest = createAction("authentication/getUserStatusRequest");
export const getUserStatusSuccess = createAction("authentication/getUserStatusSuccess");
export const getUserStatusFailed = createAction("authentication/getUserStatusFailed");

const initialState = {
  account: null,
  isAuthenticated: false,
  rememberMe: false,
  rememberLogin: null,
  userStatus: null,
  isNetworkError: false,

  getAccountError: null,
  getAccountLoading: false,
  getAccountLoaded: false,

  getUserStatusError: null,
  getUserStatusLoading: false,
  getUserStatusLoaded: false,
};

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // ClearAuth
    clearAuthData: (state) => {
      state.isAuthenticated = false;
      state.account = null;
      state.userStatus = null;
    },

    // ClearAuth
    clearRememberMeData: (state) => {
      state.rememberMe = false;
      state.rememberLogin = null;
    },

    networkError: (state) => {
      state.isNetworkError = true;
    },

    //GetRememberMe
    getRememberMeRequest: (state) => {
      state.rememberMe = false;
      state.rememberLogin = null;
    },

    getRememberMeSuccess: (state, action) => {
      state.rememberMe = action.payload && action.payload.rememberMe;
      state.rememberLogin = action.payload && action.payload.rememberLogin;
    },

    getRememberMeFailed: (state, action) => {
      state.rememberMe = false;
      state.rememberLogin = null;
    },

    // GetAccount
    getAccountRequest: (state) => {
      state.getAccountLoading = true;
      state.getAccountLoaded = false;
      state.isAuthenticated = false;
      state.getAccountError = null;
    },

    getAccountSuccess: (state, action) => {
      state.getAccountLoading = false;
      state.getAccountLoaded = true;
      state.getAccountError = null;
      state.isNetworkError = false;
      state.account = action.payload && action.payload.account;
      state.isAuthenticated = state.account && !state.account.disabled;
      state.rememberMe = action.payload && action.payload.rememberMe;
      state.rememberLogin = action.payload && action.payload.rememberLogin;
    },

    getAccountFailed: (state, action) => {
      state.getAccountLoading = false;
      state.getAccountLoaded = true;
      state.getAccountError = action.payload && action.payload.error;
      state.isAuthenticated = false;
      state.rememberMe = action.payload && action.payload.rememberMe;
      state.rememberLogin = action.payload && action.payload.rememberLogin;
    },

    // GetUserStatus
    getUserStatusRequest: (state) => {
      state.getUserStatusLoading = true;
      state.getUserStatusLoaded = false;
      state.getUserStatusError = null;
      state.userStatus = null;
    },

    getUserStatusSuccess: (state, action) => {
      state.getUserStatusLoading = false;
      state.getUserStatusLoaded = true;
      state.getUserStatusError = null;
      state.isNetworkError = false;
      state.userStatus = action.payload;
    },

    getUserStatusFailed: (state, action) => {
      state.getUserStatusLoading = false;
      state.getUserStatusLoaded = true;
      state.userStatus = null;
      state.getUserStatusError = action.payload && action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest, (state, action) => {
      state.isAuthenticated = false;
    });
    builder.addCase(loginSuccess, (state, action) => {
      state.isAuthenticated = true;
    });
    builder.addCase(loginFailed, (state, action) => {
      state.isAuthenticated = false;
    });
  },
});

export default AuthenticationSlice.reducer;
