import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { forgotPwdRequest, forgotPwdSuccess, forgotPwdFailed } from "./forgetPwdSlice";
import { confirmForgotPwdRequest, confirmForgotPwdSuccess, confirmForgotPwdFailed } from "./forgetPwdSlice";
import { apiClient } from "../../../helpers/api_helper";

// ForgotPassword
const forgotPwdApi = (email) => {
  return apiClient
    .post("/account/forgotPassword", { email: email })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* forgotPwd({ payload: { email } }) {
  const { response, error } = yield call(forgotPwdApi, email);
  if (response && response.data && response.data.CodeDeliveryDetails) {
    let result = {
      destination: response.data.CodeDeliveryDetails?.Destination,
      deliveryMedium: response.data.CodeDeliveryDetails?.DeliveryMedium,
      email: email,
    };
    yield put({ type: forgotPwdSuccess().type, payload: result });
  } else {
    yield put({ type: forgotPwdFailed().type, payload: { error: error.toString() } });
  }
}
function* watchForgotPwd() {
  // console.log("watch forgotPwdRequest()");
  yield takeEvery(forgotPwdRequest().type, forgotPwd);
}

// ConfirmForgotPassword
const confirmForgotPwdApi = (email, confirmationCode, password) => {
  return apiClient
    .post("/account/confirmForgotPassword", { email: email, confirmationCode: confirmationCode, password: password })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* confirmForgotPwd({ payload: { email, confirmationCode, password } }) {
  const { response, error } = yield call(confirmForgotPwdApi, email, confirmationCode, password);
  if (response && response.data && response.data.errorMessage) {
    let result = {};
    result["errorMessage"] = response.data.errorMessage;
    result["invalidCode"] = response.data.errorMessage.includes("Invalid verification code provided");
    yield put({ type: confirmForgotPwdFailed().type, payload: result });
  } else if (response && response.data && response.data.ResponseMetadata && response.data.ResponseMetadata.HTTPStatusCode === 200) {
    yield put({ type: confirmForgotPwdSuccess().type, payload: { email: email } });
  } else {
    yield put({ type: confirmForgotPwdFailed().type, payload: { error: error.toString() } });
  }
}
function* watchConfirmForgotPwd() {
  // console.log("watch confirmForgotPwdRequest()");
  yield takeEvery(confirmForgotPwdRequest().type, confirmForgotPwd);
}

function* forgotPwdSaga() {
  yield all([fork(watchForgotPwd), fork(watchConfirmForgotPwd)]);
}

export default forgotPwdSaga;
