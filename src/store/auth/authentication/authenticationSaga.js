import { put, takeEvery, all, call, fork } from "redux-saga/effects";
import {
  getAccountRequest,
  getAccountSuccess,
  getAccountFailed,
  getUserStatusRequest,
  getUserStatusSuccess,
  getUserStatusFailed,
  getRememberMeSuccess,
  getRememberMeRequest,
} from "./authenticationSlice";

import { apiClient, getRememberMe } from "../../../helpers/api_helper";

// GetRememberMe
function* getRememberMeSaga() {
  let result = {};
  const rememberMe = getRememberMe();
  if (rememberMe && rememberMe.rememberMe && rememberMe.rememberLogin) {
    result["rememberMe"] = rememberMe.rememberMe;
    result["rememberLogin"] = rememberMe.rememberLogin;
  } else {
    result["rememberMe"] = false;
    result["rememberLogin"] = null;
  }
  yield put({ type: getRememberMeSuccess().type, payload: result });
}
function* watchGetRememberMe() {
  // console.log("watch getRememberMeRequest()");
  yield takeEvery(getRememberMeRequest().type, getRememberMeSaga);
}

// GetAccount
const getAccountApi = () => {
  return apiClient
    .get("/api/account")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getAccount() {
  const { response, error } = yield call(getAccountApi);
  let result = {};
  const rememberMe = getRememberMe();
  if (rememberMe && rememberMe.rememberMe && rememberMe.rememberLogin) {
    result["rememberMe"] = rememberMe.rememberMe;
    result["rememberLogin"] = rememberMe.rememberLogin;
  } else {
    result["rememberMe"] = false;
    result["rememberLogin"] = null;
  }
  if (response) {
    result["account"] = response.data.body;
    yield put({ type: getAccountSuccess().type, payload: result });
  } else {
    result["error"] = error.toString();
    yield put({ type: getAccountFailed().type, payload: result });
  }
}
function* watchGetAccount() {
  // console.log("watch getAccountRequest()");
  yield takeEvery(getAccountRequest().type, getAccount);
}

// GetUserStatus
const getUserStatusApi = (email) => {
  return apiClient
    .get("/account/getUserStatus?email=" + email)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUserStatus({ payload: { email } }) {
  const { response, error } = yield call(getUserStatusApi, email);
  if (response) {
    yield put({ type: getUserStatusSuccess().type, payload: response.data });
  } else {
    yield put({ type: getUserStatusFailed().type, payload: { error: error.toString() } });
  }
}
function* watchGetUserStatus() {
  // console.log("watch getUserStatusRequest()");
  yield takeEvery(getUserStatusRequest().type, getUserStatus);
}

function* authenticationSaga() {
  yield all([fork(watchGetAccount), fork(watchGetUserStatus), fork(watchGetRememberMe)]);
}

export default authenticationSaga;
