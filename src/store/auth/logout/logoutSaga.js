import { put, takeEvery, all, call, fork } from "redux-saga/effects";
import { logoutRequest, logoutSuccess, logoutFailed } from "./logoutSlice";
import { clearAuthData } from "../authentication/authenticationSlice";
import { apiClient, clearAuthToken } from "../../../helpers/api_helper";

// Logout
const logoutApi = () => {
  return apiClient
    .get("/api/account/logout")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* logout() {
  const { response, error } = yield call(logoutApi);
  if (response) {
    clearAuthToken();
    yield put({ type: clearAuthData().type, payload: {} });
    yield put({ type: logoutSuccess().type, payload: {} });
  } else {
    yield put({ type: logoutFailed().type, payload: { error: error.toString() } });
  }
}
function* watchLogout() {
  // console.log("watch logoutRequest()");
  yield takeEvery(logoutRequest().type, logout);
}

function* logoutSaga() {
  yield all([fork(watchLogout)]);
}

export default logoutSaga;
