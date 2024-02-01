import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { changePwdRequest, changePwdSuccess, changePwdFailed } from "./changePwdSlice";
import { apiClient } from "../../../helpers/api_helper";

const changePwdApi = (previousPassword, newPassword) => {
  return apiClient
    .post("/account/changePassword", { previousPassword: previousPassword, newPassword: newPassword })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* changePwd({ payload: { previousPassword, newPassword } }) {
  const { response, error } = yield call(changePwdApi, previousPassword, newPassword);
  if (response && response.data && response.data.CodeDeliveryDetails) {
    let result = {
      destination: response.data.CodeDeliveryDetails?.Destination,
      deliveryMedium: response.data.CodeDeliveryDetails?.DeliveryMedium,
    };
    yield put({ type: changePwdSuccess().type, payload: result });
  } else {
    yield put({ type: changePwdFailed().type, payload: { error: error.toString() } });
  }
}
function* watchChangePwd() {
  // console.log("watch changePwdRequest()");
  yield takeEvery(changePwdRequest().type, changePwd);
}

function* changePwdSaga() {
  yield all([fork(watchChangePwd)]);
}

export default changePwdSaga;
