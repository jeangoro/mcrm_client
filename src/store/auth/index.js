import { clearAuthData, clearRememberMeData, getAccountRequest, networkError, getUserStatusRequest, getRememberMeRequest } from "./authentication/authenticationSlice";
import { loginRequest } from "./login/loginSlice";
import { logoutRequest } from "./logout/logoutSlice";
import { registerRequest, confirmRequest, resendConfirmationCodeRequest } from "./register/registerSlice";
import { forgotPwdRequest, confirmForgotPwdRequest } from "./forgetPwd/forgetPwdSlice";
import { clearAuthToken, clearRememberMe } from "../../helpers/api_helper";

// GetAccount
export const getAccount = (dispatch) => {
  dispatch(getAccountRequest());
};
//GetRememberMe
export const getRememberMe = (dispatch) => {
  dispatch(getRememberMeRequest());
};

// Login
export const login = (dispatch, user) => {
  dispatch({ type: loginRequest().type, payload: { user: user } });
};

// Logout
export const logout = (dispatch) => {
  dispatch({ type: logoutRequest().type, payload: {} });
};

// Register
export const register = (dispatch, user) => {
  dispatch({ type: registerRequest().type, payload: { user: user } });
};

// Register
export const confirmRegister = (dispatch, email, confirmationCode) => {
  dispatch({ type: confirmRequest().type, payload: { email: email, confirmationCode: confirmationCode } });
};

// ResendConfirmationCodeRegister
export const resendConfirmationCode = (dispatch, email) => {
  dispatch({ type: resendConfirmationCodeRequest().type, payload: { email: email } });
};

export const forgotPwd = (dispatch, email) => {
  dispatch({ type: forgotPwdRequest().type, payload: { email: email } });
};

export const confirmForgotPwd = (dispatch, email, confirmationCode, password) => {
  dispatch({ type: confirmForgotPwdRequest().type, payload: { email: email, confirmationCode: confirmationCode, password: password } });
};

export const changePwd = (dispatch, email, confirmationCode, password) => {
  dispatch({ type: confirmForgotPwdRequest().type, payload: { email: email, confirmationCode: confirmationCode, password: password } });
};

export const clearAuthentication = (msg) => (dispatch) => {
  if (msg && msg.indexOf("Network Error") >= 0) {
    dispatch(networkError());
  } else {
    clearAuthToken();
    dispatch(clearAuthData());
  }
};

export const getUserStatus = (dispatch, email) => {
  dispatch({ type: getUserStatusRequest().type, payload: { email: email } });
};

// ChangeAccount
export const changeAccount = (dispatch) => {
  clearRememberMe();
  dispatch(clearRememberMeData());
};

export const hasAnyAuthority = (roles, account) => {
  if (roles && roles.length > 0) {
    if (account && account.authorities && account.authorities.length > 0) {
      const result = roles.find((role) => {
        const index = account.authorities.findIndex((value) => value === role);
        return index >= 0;
      });
      if (result && result.length >= 1) {
        return true;
      }
    }
  }
  return false;
};
