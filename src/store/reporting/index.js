import { createRequest, deleteRequest, updateRequest } from "./reportingSlice";

export const createReporting = (dispatch, request) => {
  dispatch({ type: createRequest().type, payload: { request: request } });
};

export const updateReporting = (dispatch, request) => {
  dispatch({ type: updateRequest().type, payload: { request: request } });
};

export const deleteReporting = (dispatch, id) => {
  dispatch(deleteRequest({ id: id }));
};
