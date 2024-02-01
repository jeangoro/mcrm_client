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
  getAuthoritiesRequest,
  getAuthoritiesSuccess,
  getAuthoritiesFailed,
  addAuthoritySuccess,
  addAuthorityFailed,
  addAuthorityRequest,
  getGroupAuthoritiesSuccess,
  getGroupAuthoritiesFailed,
  getGroupAuthoritiesRequest,
  setGroupAuthoritySuccess,
  setGroupAuthorityFailed,
  setGroupAuthorityRequest,
  deleteAuthoritySuccess,
  deleteAuthorityFailed,
  deleteAuthorityRequest,
  unsetGroupAuthoritySuccess,
  unsetGroupAuthorityFailed,
  unsetGroupAuthorityRequest,
  getUserAuthoritiesSuccess,
  getUserAuthoritiesFailed,
  getUserAuthoritiesRequest,
} from "./authoritySlice";
import { apiClient } from "../../helpers/api_helper";

// Create Authority
const createAuthorityApi = (request) => {
  return apiClient
    .post("/api/authority", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* createAuthority({ payload: { request } }) {
  let { response, error } = yield call(createAuthorityApi, request);
  if (response) {
    yield put({ type: createSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: createFailed().type, payload: { error: error } });
  }
}

// Update Authority
const updateAuthorityApi = (request) => {
  return apiClient
    .put("/api/authority", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* updateAuthority({ payload: { request } }) {
  const { response, error } = yield call(updateAuthorityApi, request);
  if (response) {
    yield put({ type: updateSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: updateFailed().type, payload: { error: error.toString() } });
  }
}

// Delete Authority
const deleteAuthorityApi = (id) => {
  return apiClient
    .delete("/api/authority/" + id)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* deleteAuthority({ payload: { id } }) {
  const { response, error } = yield call(deleteAuthorityApi, id);
  if (response) {
    yield put({ type: deleteSuccess().type, payload: { id: response.data.body } });
  } else {
    yield put({ type: deleteFailed().type, payload: { error: error.toString() } });
  }
}

// Getauthority
const getAuthoritiesApi = () => {
  return apiClient
    .post("/api/authority/search", { groupId: "" })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getAuthorities() {
  const { response, error } = yield call(getAuthoritiesApi);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getAuthoritiesSuccess({ autorisations: response.data.body }));
    } else {
      yield put(getAuthoritiesFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getAuthoritiesFailed({ errorMessage: error.toString() }));
  }
}

// GetGroupAuthorities
const getGroupAuthoritiesApi = (groupId) => {
  return apiClient
    .post("/api/authority/search", { groupId: groupId })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getGroupAuthorities({ payload: { groupId } }) {
  const { response, error } = yield call(getGroupAuthoritiesApi, groupId);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getGroupAuthoritiesSuccess({ groupAutorisations: response.data.body }));
    } else {
      yield put(getGroupAuthoritiesFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getGroupAuthoritiesFailed({ error: error.toString() }));
  }
}

// setGroupAuthority
const setGroupAuthorityApi = (config) => {
  return apiClient
    .post("/api/authority/group", config)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* setGroupAuthority({ payload: { config } }) {
  const { response, error } = yield call(setGroupAuthorityApi, config);
  if (response) {
    if (response && response.data && response.data && response.status === 200) {
      yield put(setGroupAuthoritySuccess());
    } else {
      yield put(setGroupAuthorityFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(setGroupAuthorityFailed({ error: error.toString() }));
  }
}

// unsetGroupAuthority
const unsetGroupAuthorityApi = (config) => {
  return apiClient
    .delete("/api/authority/group/" + config.groupId + "/" + config.authorityId)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* unsetGroupAuthority({ payload: { config } }) {
  const { response, error } = yield call(unsetGroupAuthorityApi, config);
  if (response) {
    if (response && response.data && response.data.message) {
      yield put(unsetGroupAuthorityFailed({ errorMessage: response.data.message }));
    } else {
      yield put(unsetGroupAuthoritySuccess({}));
    }
  } else {
    yield put(unsetGroupAuthorityFailed({ error: error.toString() }));
  }
}

// getUserAuthorities
const getUserAuthoritiesApi = (groupId) => {
  return apiClient
    .post("/api/authority/search", { groupId: groupId })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getUserAuthorities({ payload: { groups } }) {
  for (let index = 0; index < groups.length; index++) {
    const groupName = groups[index].name;
    const { response, error } = yield call(getUserAuthoritiesApi, groupName);
    if (response) {
      if (response && response.data && response.data.body) {
        yield put(getUserAuthoritiesSuccess({ userAuthorities: response.data.body }));
      } else {
        yield put(getUserAuthoritiesFailed({ errorMessage: response.data.message }));
      }
    } else {
      yield put(getUserAuthoritiesFailed({ error: error.toString() }));
    }
  }
}

// watch authoritySaga function
function* watchAuthoritySaga() {
  yield takeEvery(createRequest().type, createAuthority);
  yield takeEvery(updateRequest().type, updateAuthority);
  yield takeEvery(deleteRequest().type, deleteAuthority);

  yield takeEvery(getAuthoritiesRequest().type, getAuthorities);
  yield takeEvery(getGroupAuthoritiesRequest().type, getGroupAuthorities);
  yield takeLatest(getUserAuthoritiesRequest().type, getUserAuthorities);
  yield takeEvery(setGroupAuthorityRequest().type, setGroupAuthority);
  yield takeEvery(unsetGroupAuthorityRequest().type, unsetGroupAuthority);
}

// authoritySaga export function
export default function* authoritySaga() {
  yield all([fork(watchAuthoritySaga)]);
}
