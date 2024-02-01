import { put, takeEvery, all, call, fork, takeLatest } from "redux-saga/effects";
import {
  createRequest,
  createSuccess,
  createFailed,
  updateRequest,
  updateSuccess,
  updateFailed,
  deleteRequest,
  deleteSuccess,
  deleteFailed,
  getUsersListSuccess,
  getUsersListFailed,
  getUsersListRequest,
  getUserByIdSuccess,
  getUserByIdFailed,
  getUserByIdRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
  resetPasswordRequest,
  resentCodeSuccess,
  resentCodeFailed,
  resentCodeRequest,
  deactivateSuccess,
  deactivateFailed,
  deactivateRequest,
  activateSuccess,
  activateFailed,
  activateRequest,
  getUserStatusFailed,
  getUserStatusSuccess,
  getUserStatusRequest,
} from "./userSlice";
import { apiClient } from "../../helpers/api_helper";

// Create User
const createUserApi = (request) => {
  return apiClient
    .post("/api/user/admin/create", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* createUser({ payload: { request } }) {
  let { response, error } = yield call(createUserApi, request);
  if (response) {
    yield put({ type: createSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: createFailed().type, payload: { error: error } });
  }
}

// Update User
const updateUserApi = (request) => {
  return apiClient
    .put("/api/user", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* updateUser({ payload: { request } }) {
  const { response, error } = yield call(updateUserApi, request);
  if (response) {
    yield put({ type: updateSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: updateFailed().type, payload: { error: error.toString() } });
  }
}

// Delete User
const deleteUserApi = (id) => {
  return apiClient
    .delete("/api/user/" + id)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* deleteUser({ payload: { id } }) {
  const { response, error } = yield call(deleteUserApi, id);
  if (response) {
    yield put({ type: deleteSuccess().type, payload: { id: response.data.body } });
  } else {
    yield put({ type: deleteFailed().type, payload: { error: error.toString() } });
  }
}

// getUsersList
const getUsersListApi = (params) => {
  return apiClient
    .post("/api/user/search", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUsersList({ payload: { params } }) {
  const { response, error } = yield call(getUsersListApi, params);
  if (response) {
    if (response && response.data && response.data.body && response.data.body.users) {
      yield put(getUsersListSuccess({ usersList: response.data.body.users }));
    } else {
      yield put(getUsersListFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getUsersListFailed({ errorMessage: error.toString() }));
  }
}

// getUserById
const getUserByIdApi = (userId) => {
  return apiClient
    .post("/api/user/search/", { userId: userId })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUserById({ payload: { id } }) {
  const { response, error } = yield call(getUserByIdApi, id);
  if (response) {
    if (response && response.data && response.data.body && response.data.body.users) {
      yield put(getUserByIdSuccess({ userById: response.data.body.users[0] }));
    } else {
      yield put(getUserByIdFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getUserByIdFailed({ errorMessage: error.toString() }));
  }
}

// resetPassword
const resetPasswordApi = (params) => {
  return apiClient
    .post("/api/user/admin/resetPassword", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* resetPassword({ payload: { params } }) {
  const { response, error } = yield call(resetPasswordApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(resetPasswordFailed({ errorMessage: response.data.message }));
    } else {
      yield put(resetPasswordSuccess({ userById: response.data.body }));
    }
  } else {
    yield put(resetPasswordFailed({ errorMessage: error.toString() }));
  }
}

// resentCode
const resentCodeApi = (params) => {
  return apiClient
    .post("/api/user/admin/resentCode", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* resentCode({ payload: { params } }) {
  const { response, error } = yield call(resentCodeApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(resentCodeFailed({ errorMessage: response.data.message }));
    } else {
      yield put(resentCodeSuccess({ userById: response.data.body }));
    }
  } else {
    yield put(resentCodeFailed({ errorMessage: error.toString() }));
  }
}

// deactivate
const deactivateApi = (params) => {
  return apiClient
    .post("/api/user/admin/disabled", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* deactivate({ payload: { params } }) {
  const { response, error } = yield call(deactivateApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(deactivateFailed({ errorMessage: response.data.message }));
    } else {
      yield put(deactivateSuccess({ userById: response.data.body }));
    }
  } else {
    yield put(deactivateFailed({ errorMessage: error.toString() }));
  }
}

// activate
const activateApi = (params) => {
  return apiClient
    .post("/api/user/admin/enabled", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* activate({ payload: { params } }) {
  const { response, error } = yield call(activateApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(activateFailed({ errorMessage: response.data.message }));
    } else {
      yield put(activateSuccess({ userById: response.data.body }));
    }
  } else {
    yield put(activateFailed({ errorMessage: error.toString() }));
  }
}

// getUserStatus
const getUserStatusApi = (userId) => {
  return apiClient
    .get("/api/user/admin/getStatus/" + userId)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUserStatus({ payload: { userId } }) {
  const { response, error } = yield call(getUserStatusApi, userId);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getUserStatusSuccess({ userStatus: response.data.body }));
    } else {
      yield put(getUserStatusFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getUserStatusFailed({ errorMessage: error.toString() }));
  }
}

// watch userSaga function
function* watchUserSaga() {
  yield takeEvery(getUsersListRequest().type, getUsersList);
  yield takeEvery(getUserByIdRequest().type, getUserById);
  yield takeEvery(resetPasswordRequest().type, resetPassword);
  yield takeEvery(resentCodeRequest().type, resentCode);
  yield takeEvery(deactivateRequest().type, deactivate);
  yield takeEvery(activateRequest().type, activate);
  yield takeEvery(getUserStatusRequest().type, getUserStatus);
  yield takeEvery(deleteRequest().type, deleteUser);
  yield takeEvery(updateRequest().type, updateUser);
  yield takeEvery(createRequest().type, createUser);
}

// userSaga export function
export default function* userSaga() {
  yield all([fork(watchUserSaga)]);
}
