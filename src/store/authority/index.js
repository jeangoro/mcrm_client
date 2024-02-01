import {
  createRequest,
  deleteRequest,
  getAuthoritiesRequest,
  getGroupAuthoritiesRequest,
  getUserAuthoritiesRequest,
  setAuthorityUrl,
  setGroupAuthorityRequest,
  unsetGroupAuthorityRequest,
  updateRequest,
} from "./authoritySlice";

export const createAuthority = (dispatch, request) => {
  dispatch({ type: createRequest().type, payload: { request: request } });
};

export const updateAuthority = (dispatch, request) => {
  dispatch({ type: updateRequest().type, payload: { request: request } });
};

export const deleteAuthority = (dispatch, id) => {
  dispatch(deleteRequest({ id: id }));
};

// GetAuthority
export const getAuthorities = (dispatch) => {
  dispatch({ type: getAuthoritiesRequest().type, payload: null });
};
// Get group Authorities
export const getGroupAuthorities = (dispatch, groupId) => {
  dispatch({ type: getGroupAuthoritiesRequest().type, payload: { groupId: groupId } });
};
// SetGroupAuthority
//  config format = {
//   "groupId": "string",
//   "authorityId": "string",
//   "contextCode": "string"
// };
export const setGroupAuthority = (dispatch, config) => {
  dispatch(setGroupAuthorityRequest({ config: config }));
};
// unsetGroupAuthority
//  config format = {
//   "groupId": "string",
//   "authorityId": "string",
//   "contextCode": "string"
// };
export const unsetGroupAuthority = (dispatch, config) => {
  dispatch(unsetGroupAuthorityRequest({ config: config }));
};

export const getUserAuthorities = (dispatch, groups) => {
  dispatch(getUserAuthoritiesRequest({ groups: groups }));
};
