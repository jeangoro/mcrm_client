import {apiClient} from "./api_helper";
import * as moment from "moment";

import * as url from "./url_helper";

const api = apiClient;
// Login Method
export const postLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);
export const getUserInfo = () => api.get(url.GET_USER_INFO);

export const parseFilters = (filter, searchParam, columns) => {
  if (["and", "or"].includes(filter[1])) {
    parseFilters(filter[0], searchParam, columns);
    parseFilters(filter[2], searchParam, columns);
  } else {
    const key = filter[0];
    const value = filter[2];
    searchParam[key] = [...(searchParam[key] || []), value]
  }
};
// contacts
export const getContacts = (searchParam) => {
  const params = searchParam ? searchParam : {};
  const currentDate = moment();
  if (!params?.startCreateDate) {
    params.startCreateDate = moment().subtract(1, "year");
  }
  if (!params?.endCreateDate) {
    params.endCreateDate = currentDate;
  }
  if (!params?.agentCountry) {
    const user = null //getLoggedInUser();
    params.agentCountry = user?.country || "CMR";
  }
  return api.post(url.GET_CONTACTS, params);
};

export const saveContact=(contact) => {
  return api.post(url.SAVE_CONTACT, contact);
}
export const getContactById=(id) => {
  return api.post(url.GET_CONTACTS, {ids: [id]}).then( resp => {
    return resp.data.body.elements[0]
  });
}