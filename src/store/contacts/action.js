import {
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  GET_CONTACTS_DATA,
  GET_REF_DATA, 
  GET_CONTACTS_DETAIL,
} from "./actionType";

// common success
export const contactsApiSuccess = (actionType, data) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const contactsApiError = (actionType, error) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// contacts
export const getContactsData = (contacts) => ({
  type: GET_CONTACTS_DATA,
  payload: contacts
});
export const getRefData = (refData) => ({
  type: GET_REF_DATA,
  payload: refData
});

export const getContactsDetails = (contacts) => ({
  type: GET_CONTACTS_DETAIL,
  payload: contacts
});
