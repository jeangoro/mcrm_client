import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { registerRequest, registerSuccess, registerFailed } from "./registerSlice";
import { confirmRequest, confirmSuccess, confirmFailed } from "./registerSlice";
import { resendConfirmationCodeRequest, resendConfirmationCodeSuccess, resendConfirmationCodeFailed } from "./registerSlice";
import { apiClient } from "../../../helpers/api_helper";

// Register
const registerApi = (user) => {
  return apiClient
    .post("/account/signUp", user)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* register({ payload: { user } }) {
  const { response, error } = yield call(registerApi, user);
  if (response) {
    if (response && response.data && response.data.errorMessage) {
      let userStatus = response.data.getUserStatus;
      userStatus["errorMessage"] = response.data.errorMessage;
      userStatus["userAlreadyExist"] = response.data.errorMessage.includes("email already exists");
      yield put({ type: registerFailed().type, payload: userStatus });
    } else if (response && response.data && response.data.UserSub && response.data.CodeDeliveryDetails) {
      let result = {
        userConfirmed: response.data.UserConfirmed,
        destination: response.data.CodeDeliveryDetails?.Destination,
        deliveryMedium: response.data.CodeDeliveryDetails?.DeliveryMedium,
        email: user.email,
      };
      yield put({ type: registerSuccess().type, payload: result });
    } else {
      yield put({ type: registerFailed().type, payload: response.data });
    }
  } else {
    yield put({ type: registerFailed().type, payload: { error: error.toString() } });
  }
}
function* watchRegister() {
  // console.log("watch registerRequest()");
  yield takeEvery(registerRequest().type, register);
}

// Confirm SignUp
const confirmRegisterApi = (email, confirmationCode) => {
  return apiClient
    .post("/account/confirmSignUp", { email: email, confirmationCode: confirmationCode })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* confirmRegister({ payload: { email, confirmationCode } }) {
  const { response, error } = yield call(confirmRegisterApi, email, confirmationCode);
  if (response) {
    if (response && response.data && response.data.errorMessage) {
      let result = {};
      result["errorMessage"] = response.data.errorMessage;
      result["invalidCode"] = response.data.errorMessage.includes("Invalid code provided");
      yield put({ type: confirmFailed().type, payload: result });
    } else if (response && response.data && response.data.ResponseMetadata && response.data.ResponseMetadata.HTTPStatusCode === 200) {
      yield put({ type: confirmSuccess().type, payload: { email: email } });
    } else {
      yield put({ type: confirmFailed().type, payload: response.data });
    }
  } else {
    yield put({ type: confirmFailed().type, payload: { error: error.toString() } });
  }
}
function* watchConfirmRegister() {
  // console.log("watch confirmRequest()");
  yield takeEvery(confirmRequest().type, confirmRegister);
}

// ResendConfirmationCode
const resendConfirmationCodeApi = (email) => {
  return apiClient
    .post("/account/resendConfirmationCode", { userId: email })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* resendConfirmationCode({ payload: { email } }) {
  const { response, error } = yield call(resendConfirmationCodeApi, email);
  if (response) {
    if (response && response.data && response.data.CodeDeliveryDetails && response.data.httpStatusCode === 200) {
      let result = {
        codeSent: true,
        destination: response.data.CodeDeliveryDetails?.Destination,
        deliveryMedium: response.data.CodeDeliveryDetails?.DeliveryMedium,
        email: email,
      };
      yield put({ type: resendConfirmationCodeSuccess().type, payload: result });
    } else if (response && response.data && response.data.errorMessage) {
      let result = {};
      result["errorMessage"] = response.data.errorMessage;
      yield put({ type: resendConfirmationCodeFailed().type, payload: result });
    } else {
      yield put({ type: resendConfirmationCodeFailed().type, payload: response.data });
    }
  } else {
    yield put({ type: resendConfirmationCodeFailed().type, payload: { error: error.toString() } });
  }
}
function* watchResendConfirmationCode() {
  // console.log("watch resendConfirmationCodeRequest()");
  yield takeEvery(resendConfirmationCodeRequest().type, resendConfirmationCode);
}

function* registerSaga() {
  yield all([fork(watchRegister), fork(watchConfirmRegister), fork(watchResendConfirmationCode)]);
}

export default registerSaga;
