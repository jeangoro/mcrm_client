import { put, takeEvery, all, call, fork } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailed } from "./loginSlice";
import { getAccountRequest, getUserStatusSuccess } from "../authentication/authenticationSlice";
import { apiClient, setAuthToken, setRememberMe } from "../../../helpers/api_helper";

// Login
const loginApi = (user) => {
  return apiClient
    .post("/account/signIn", user)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* login({ payload: { user } }) {
  const { response, error } = yield call(loginApi, user);
  if (response) {
    if (response && response.data && response.data.AuthenticationResult) {
      const token = {
        accessToken: response.data.AuthenticationResult?.AccessToken,
        refreshToken: response.data.AuthenticationResult?.RefreshToken,
        idToken: response.data.AuthenticationResult?.IdToken,
        expiresIn: response.data.AuthenticationResult?.ExpiresIn,
      };
      setAuthToken(user.rememberMe, token);

      if (user.rememberMe && user.email) {
        const rememberMe = {};
        rememberMe["rememberMe"] = user.rememberMe;
        rememberMe["rememberLogin"] = user.email;
        rememberMe["creationDate"] = Date.now();
        setRememberMe(rememberMe);
      }
      yield put({ type: loginSuccess().type, payload: {} });
      yield put({ type: getAccountRequest().type, payload: {} });
    } else if (response && response.data && response.data.getUserStatus) {
      let userStatus = response.data.getUserStatus;
      userStatus["errorMessage"] = response.data.errorMessage;
      yield put({ type: getUserStatusSuccess().type, payload: userStatus });
      yield put({ type: loginFailed().type, payload: { userStatus: userStatus } });
    } else {
      // Manage error
      /*
                {
                    "errorCode": "",
                    "errorMessage": "contextCode is mandatory in headers for signin",
                    "httpStatusCode": 500
                }
             */
      yield put({ type: loginFailed().type, payload: response.data });
    }
  } else {
    yield put({ type: loginFailed().type, payload: { error: error.toString() } });
  }
}
function* watchLogin() {
  // console.log("watch loginRequest()");
  yield takeEvery(loginRequest().type, login);
}

function* loginSaga() {
  yield all([fork(watchLogin)]);
}

export default loginSaga;
