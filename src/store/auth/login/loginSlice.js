import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../../components/common/Toastify";

export const loginRequest = createAction("login/loginRequest");
export const loginSuccess = createAction("login/loginSuccess");
export const loginFailed = createAction("login/loginFailed");

const initialState = {
  loginError: null,
  loginLoading: false,
  loginSuccess: false,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Login
    loginRequest: (state) => {
      state.loginLoading = true;
      state.loginSuccess = false;
      state.loginError = null;
      mcrmToastLoading("connexion en cours...");
    },
    loginSuccess: (state, action) => {
      state.loginLoading = false;
      state.loginSuccess = true;
      state.loginError = null;
      mcrmToastUpdateSuccess("Connexion reussie!");
    },
    loginFailed: (state, action) => {
      state.loginLoading = false;
      state.loginSuccess = true;
      if (action.payload && action.payload.errorMessage) {
        state.loginError = action.payload && action.payload.errorMessage;
      } else {
        state.loginError = action.payload && action.payload.error;
      }
      mcrmToastUpdateError(action.payload && action.payload.error);
    },
  },
  extraReducers: (builder) => {},
});

export default LoginSlice.reducer;
