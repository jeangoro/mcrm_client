import { put, takeEvery, all, call, fork } from "redux-saga/effects";
import { createRequest, createSuccess, createFailed, updateRequest, updateSuccess, updateFailed, deleteRequest, deleteSuccess, deleteFailed } from "./reportingSlice";
import { apiClient } from "../../helpers/api_helper";

// Create Reporting
const createReportingApi = (request) => {
  request["OrderNumber"] = 123456;
  request["OrderDate"] = "2013/11/12";
  const mockData = { data: request };
  return apiClient
    .post("/api/mock", mockData)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* createReporting({ payload: { request } }) {
  let { response, error } = yield call(createReportingApi, request);
  if (request.withError) {
    response = null;
    error = { errorCode: "Err 100", details: "Error occurred when we try to save data" };
  }
  if (response) {
    yield put({ type: createSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: createFailed().type, payload: { error: error } });
  }
}
function* watchCreateReporting() {
  // console.log("watch watchCreateReporting()");
  yield takeEvery(createRequest().type, createReporting);
}

// Update Reporting
const updateReportingApi = (request) => {
  request["OrderDate"] = "2013-11-12";
  const mockData = { data: request };
  return apiClient
    .put("/api/mock", mockData)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* updateReporting({ payload: { request } }) {
  const { response, error } = yield call(updateReportingApi, request);
  if (response) {
    yield put({ type: updateSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: updateFailed().type, payload: { error: error.toString() } });
  }
}
function* watchUpdateReporting() {
  // console.log("watch watchUpdateReporting()");
  yield takeEvery(updateRequest().type, updateReporting);
}

// Delete Reporting
const deleteReportingApi = (id) => {
  return apiClient
    .delete("/api/mock/" + id)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* deleteReporting({ payload: { id } }) {
  const { response, error } = yield call(deleteReportingApi, id);
  if (response) {
    yield put({ type: deleteSuccess().type, payload: { id: response.data.body } });
  } else {
    yield put({ type: deleteFailed().type, payload: { error: error.toString() } });
  }
}
function* watchDeleteReporting() {
  // console.log("watch watchDeleteReporting()");
  yield takeEvery(deleteRequest().type, deleteReporting);
}

function* reportingSaga() {
  yield all([fork(watchCreateReporting), fork(watchUpdateReporting), fork(watchDeleteReporting)]);
}

export default reportingSaga;
