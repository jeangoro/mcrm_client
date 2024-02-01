import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_CONTACTS_DATA, GET_REF_DATA, GET_CONTACTS_DETAIL } from "./actionType";
import { contactsApiError, contactsApiSuccess } from "./action";

//Include Both Helper File with needed methods
import {
  getContacts,
}
  from "../../helpers/backend_helper";

function* getContactsData({ payload: data }) {
  try {
    var response;
    response = yield call(getContacts, data);
    yield put(contactsApiSuccess(GET_CONTACTS_DATA, response));
  } catch (error) {
    yield put(contactsApiError(GET_CONTACTS_DATA, error));
  }
}

function* getContactDetails({ payload: data }) {
  try {
    var response;
    response = yield call(getContacts, data);
    yield put(contactsApiSuccess(GET_CONTACTS_DETAIL, response));
  } catch (error) {
    yield put(contactsApiError(GET_CONTACTS_DETAIL, error));
  }
}

export function* watchGetContactsData() {
  yield takeEvery(GET_CONTACTS_DATA, getContactsData);
}


export function* watchGetContactsDetails() {
  yield takeEvery(GET_CONTACTS_DETAIL, getContactDetails);
}

function* contactsSaga() {
  yield all([fork(watchGetContactsData), fork(watchGetContactsDetails)]);
}

export default contactsSaga;
