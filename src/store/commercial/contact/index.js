import { createRequest } from "./contactSlice";

export const createContact = (dispatch, infosContact) => {
  dispatch(createRequest({ infosContact: infosContact }));
};
