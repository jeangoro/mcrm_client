import { setGroupAuthorityRequest, unsetGroupAuthorityRequest } from "../authority/authoritySlice";
import { createRequest, deleteRequest, getGroupsListRequest, getUserGroupsRequest, setUserGroupRequest, unsetUserGroupRequest, updateRequest } from "./groupSlice";

export const createGroup = (dispatch, request) => {
  dispatch({ type: createRequest().type, payload: { request: request } });
};

export const updateGroup = (dispatch, request) => {
  dispatch({ type: updateRequest().type, payload: { request: request } });
};

export const deleteGroup = (dispatch, id) => {
  dispatch(deleteRequest({ id: id }));
};
// export const setAuthorityGroup = (dispatch, infos) => {
//   dispatch(setGroupAuthorityRequest({ config: infos }));
// };
// export const unsetAuthorityGroup = (dispatch, infos) => {
//   dispatch(unsetGroupAuthorityRequest({ config: infos }));
// };
export const setUserGroup = (dispatch, infos) => {
  dispatch(setUserGroupRequest({ config: infos }));
};
export const unsetUserGroup = (dispatch, infos) => {
  dispatch(unsetUserGroupRequest({ config: infos }));
};
export const getGroupList = (dispatch) => {
  dispatch(getGroupsListRequest());
};
export const getUserGroupsList = (dispatch, userId) => {
  dispatch(getUserGroupsRequest({ userId: userId }));
};
