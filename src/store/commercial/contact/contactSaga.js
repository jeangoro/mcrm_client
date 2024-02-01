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
  getContactsListSuccess,
  getContactsListFailed,
  getContactsListRequest,
  getContactByIdSuccess,
  getContactByIdFailed,
  getContactByIdRequest,
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
  getContactStatusFailed,
  getContactStatusSuccess,
  getContactStatusRequest,
} from "./contactSlice";
import { apiClient } from "../../../helpers/api_helper";

// Create Contact
const createContactApi = (infosContact) => {
  return apiClient
    .post("/api/contacts", infosContact)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* createContact({ payload: { infosContact } }) {
  let { response, error } = yield call(createContactApi, infosContact);
  if (response) {
    yield put({ type: createSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: createFailed().type, payload: { error: error } });
  }
}

// Update Contact
const updateContactApi = (request) => {
  return apiClient
    .put("/api/contact", request)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* updateContact({ payload: { request } }) {
  const { response, error } = yield call(updateContactApi, request);
  if (response) {
    yield put({ type: updateSuccess().type, payload: response.data.body });
  } else {
    yield put({ type: updateFailed().type, payload: { error: error.toString() } });
  }
}

// Delete Contact
const deleteContactApi = (id) => {
  return apiClient
    .delete("/api/contact/" + id)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* deleteContact({ payload: { id } }) {
  const { response, error } = yield call(deleteContactApi, id);
  if (response) {
    yield put({ type: deleteSuccess().type, payload: { id: response.data.body } });
  } else {
    yield put({ type: deleteFailed().type, payload: { error: error.toString() } });
  }
}

// getContactsList
const getContactsListApi = (params) => {
  return apiClient
    .post("/api/contact/search", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getContactsList({ payload: { params } }) {
  const { response, error } = yield call(getContactsListApi, params);
  if (response) {
    if (response && response.data && response.data.body && response.data.body.contacts) {
      yield put(getContactsListSuccess({ contactsList: response.data.body.contacts }));
    } else {
      yield put(getContactsListFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getContactsListFailed({ errorMessage: error.toString() }));
  }
}

// getContactById
const getContactByIdApi = (contactId) => {
  return apiClient
    .post("/api/contact/search/", { contactId: contactId })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getContactById({ payload: { id } }) {
  const { response, error } = yield call(getContactByIdApi, id);
  if (response) {
    if (response && response.data && response.data.body && response.data.body.contacts) {
      yield put(getContactByIdSuccess({ contactById: response.data.body.contacts[0] }));
    } else {
      yield put(getContactByIdFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getContactByIdFailed({ errorMessage: error.toString() }));
  }
}

// resetPassword
const resetPasswordApi = (params) => {
  return apiClient
    .post("/api/contact/admin/resetPassword", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* resetPassword({ payload: { params } }) {
  const { response, error } = yield call(resetPasswordApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(resetPasswordFailed({ errorMessage: response.data.message }));
    } else {
      yield put(resetPasswordSuccess({ contactById: response.data.body }));
    }
  } else {
    yield put(resetPasswordFailed({ errorMessage: error.toString() }));
  }
}

// resentCode
const resentCodeApi = (params) => {
  return apiClient
    .post("/api/contact/admin/resentCode", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* resentCode({ payload: { params } }) {
  const { response, error } = yield call(resentCodeApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(resentCodeFailed({ errorMessage: response.data.message }));
    } else {
      yield put(resentCodeSuccess({ contactById: response.data.body }));
    }
  } else {
    yield put(resentCodeFailed({ errorMessage: error.toString() }));
  }
}

// deactivate
const deactivateApi = (params) => {
  return apiClient
    .post("/api/contact/admin/disabled", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* deactivate({ payload: { params } }) {
  const { response, error } = yield call(deactivateApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(deactivateFailed({ errorMessage: response.data.message }));
    } else {
      yield put(deactivateSuccess({ contactById: response.data.body }));
    }
  } else {
    yield put(deactivateFailed({ errorMessage: error.toString() }));
  }
}

// activate
const activateApi = (params) => {
  return apiClient
    .post("/api/contact/admin/enabled", params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* activate({ payload: { params } }) {
  const { response, error } = yield call(activateApi, params);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(activateFailed({ errorMessage: response.data.message }));
    } else {
      yield put(activateSuccess({ contactById: response.data.body }));
    }
  } else {
    yield put(activateFailed({ errorMessage: error.toString() }));
  }
}

// getContactStatus
const getContactStatusApi = (contactId) => {
  return apiClient
    .get("/api/contact/admin/getStatus/" + contactId)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
function* getContactStatus({ payload: { contactId } }) {
  const { response, error } = yield call(getContactStatusApi, contactId);
  if (response) {
    if (response && response.data && response.data.body) {
      yield put(getContactStatusSuccess({ contactStatus: response.data.body }));
    } else {
      yield put(getContactStatusFailed({ errorMessage: response.data.message }));
    }
  } else {
    yield put(getContactStatusFailed({ errorMessage: error.toString() }));
  }
}

// watch contactSaga function
function* watchContactSaga() {
  yield takeEvery(getContactsListRequest().type, getContactsList);
  yield takeEvery(getContactByIdRequest().type, getContactById);
  yield takeEvery(resetPasswordRequest().type, resetPassword);
  yield takeEvery(resentCodeRequest().type, resentCode);
  yield takeEvery(deactivateRequest().type, deactivate);
  yield takeEvery(activateRequest().type, activate);
  yield takeEvery(getContactStatusRequest().type, getContactStatus);
  yield takeEvery(deleteRequest().type, deleteContact);
  yield takeEvery(updateRequest().type, updateContact);
  yield takeEvery(createRequest().type, createContact);
}

// contactSaga export function
export default function* contactSaga() {
  yield all([fork(watchContactSaga)]);
}
