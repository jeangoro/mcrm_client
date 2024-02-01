import { put, takeEvery, all, call, fork } from "redux-saga/effects";
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
  setUserGroupSuccess,
  setUserGroupFailed,
  setUserGroupRequest,
  getGroupsListSuccess,
  getGroupsListFailed,
  getGroupsListRequest,
  unsetUserGroupSuccess,
  unsetUserGroupFailed,
  unsetUserGroupRequest,
  getUserGroupsSuccess,
  getUserGroupsFailed,
  getUserGroupsRequest,
} from "./groupSlice";
import { apiClient } from "../../helpers/api_helper";

// Create Group
const createGroupApi = (request) => {
  return apiClient
    .post("/api/group", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* createGroup({ payload: { request } }) {
  let { response, error } = yield call(createGroupApi, request);
  if (response) {
    yield put({ type: createSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: createFailed().type, payload: { error: error } });
  }
}

// Update Group
const updateGroupApi = (request) => {
  return apiClient
    .put("/api/group", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* updateGroup({ payload: { request } }) {
  const { response, error } = yield call(updateGroupApi, request);
  if (response) {
    yield put({ type: updateSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: updateFailed().type, payload: { error: error.toString() } });
  }
}

// Delete Group
const deleteGroupApi = (id) => {
  return apiClient
    .delete("/api/group/" + id)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* deleteGroup({ payload: { id } }) {
  const { response, error } = yield call(deleteGroupApi, id);
  if (response) {
    yield put({ type: deleteSuccess().type, payload: { id: response.data.body } });
  } else {
    yield put({ type: deleteFailed().type, payload: { error: error.toString() } });
  }
}

// Set user Group
const setUserGroupApi = (config) => {
  return apiClient
    .post("/api/group/user", config)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* setUserGroupGroup({ payload: { config } }) {
  let { response, error } = yield call(setUserGroupApi, config);
  if (response) {
    yield put({ type: setUserGroupSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: setUserGroupFailed().type, payload: { error: error } });
  }
}

// unSet user Group
const unsetUserGroupApi = (config) => {
  return apiClient
    .delete("/api/group/user/" + config.userId + "/" + config.groupId)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* unsetUserGroupGroup({ payload: { config } }) {
  let { response, error } = yield call(unsetUserGroupApi, config);
  if (response) {
    yield put({ type: unsetUserGroupSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: unsetUserGroupFailed().type, payload: { error: error } });
  }
}

// getGroupsList
const getGroupsListApi = () => {
  return apiClient
    .post("/api/group/search", { userId: "" })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getGroupsList() {
  const { response, error } = yield call(getGroupsListApi);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getGroupsListSuccess({ groupsList: response.data.body }));
    } else {
      yield put(getGroupsListFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getGroupsListFailed({ errorMessage: error.toString() }));
  }
}

// getUserGroups
const getUserGroupsApi = (userId) => {
  return apiClient
    .post("/api/group/search", { userId: userId })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUserGroups({ payload: { userId } }) {
  const { response, error } = yield call(getUserGroupsApi, userId);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getUserGroupsSuccess({ userGroupsList: response.data.body }));
    } else {
      yield put(getUserGroupsFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getUserGroupsFailed({ errorMessage: error.toString() }));
  }
}

function* watchGroupSaga() {
  // console.log("watch watchGroupSaga()");
  yield takeEvery(setUserGroupRequest().type, setUserGroupGroup);
  yield takeEvery(unsetUserGroupRequest().type, unsetUserGroupGroup);
  yield takeEvery(deleteRequest().type, deleteGroup);
  yield takeEvery(updateRequest().type, updateGroup);
  yield takeEvery(createRequest().type, createGroup);
  yield takeEvery(getGroupsListRequest().type, getGroupsList);
  yield takeEvery(getUserGroupsRequest().type, getUserGroups);
}

function* groupSaga() {
  yield all([fork(watchGroupSaga)]);
}

export default groupSaga;
