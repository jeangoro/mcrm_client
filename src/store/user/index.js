import { setUserGroupRequest } from "../group/groupSlice";
import {
  activateRequest,
  createRequest,
  deactivateRequest,
  deleteRequest,
  getUserByIdRequest,
  getUserStatusRequest,
  getUsersListRequest,
  resentCodeRequest,
  resetPasswordRequest,
  updateRequest,
} from "./userSlice";

export const createUser = (dispatch, request) => {
  dispatch(createRequest({ request: request }));
};

export const updateUser = (dispatch, request) => {
  dispatch(updateRequest({ request: request }));
};

export const deleteUser = (dispatch, id) => {
  dispatch(deleteRequest({ id: id }));
};
export const setGroupUser = (dispatch, infos) => {
  dispatch(setUserGroupRequest({ config: infos }));
};

export const getUsersList = (dispatch, params) => {
  dispatch(getUsersListRequest({ params: params }));
};

export const getUserById = (dispatch, userId) => {
  dispatch(getUserByIdRequest({ id: userId }));
};

export const resetPassword = (dispatch, params) => {
  dispatch(resetPasswordRequest({ params: params }));
};

export const resentCode = (dispatch, params) => {
  dispatch(resentCodeRequest({ params: params }));
};

export const deactivate = (dispatch, params) => {
  dispatch(deactivateRequest({ params: params }));
};

export const activate = (dispatch, params) => {
  dispatch(activateRequest({ params: params }));
};

export const getUserStatus = (dispatch, userId) => {
  dispatch(getUserStatusRequest({ userId: userId }));
};
