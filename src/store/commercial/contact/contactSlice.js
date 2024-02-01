import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../../components/common/Toastify";

export const toggleFilter = createAction("contact/toggleFilter");
export const toggleCreate = createAction("contact/toggleCreate");
export const toggleUpdate = createAction("contact/toggleUpdate");
export const toggleStatus = createAction("contact/toggleStatus");
export const toggleDelete = createAction("contact/toggleDelete");
export const toggleView = createAction("contact/toggleView");
export const initialise = createAction("contact/initialise");

export const editSuccess = createAction("contact/editSuccess");

export const gridActionType = createAction("contact/gridActionType");

export const createRequest = createAction("contact/createRequest");
export const createSuccess = createAction("contact/createSuccess");
export const createFailed = createAction("contact/createFailed");

export const updateRequest = createAction("contact/updateRequest");
export const updateSuccess = createAction("contact/updateSuccess");
export const updateFailed = createAction("contact/updateFailed");

export const deleteRequest = createAction("contact/deleteRequest");
export const deleteSuccess = createAction("contact/deleteSuccess");
export const deleteFailed = createAction("contact/deleteFailed");

// getContactsList actions creation
export const getContactsListRequest = createAction("contact/getContactsListRequest");
export const getContactsListSuccess = createAction("contact/getContactsListSuccess");
export const getContactsListFailed = createAction("contact/getContactsListFailed");
// getContactById actions creation
export const getContactByIdRequest = createAction("contact/getContactByIdRequest");
export const getContactByIdSuccess = createAction("contact/getContactByIdSuccess");
export const getContactByIdFailed = createAction("contact/getContactByIdFailed");
// resetPassword actions creation
export const resetPasswordRequest = createAction("contact/resetPasswordRequest");
export const resetPasswordSuccess = createAction("contact/resetPasswordSuccess");
export const resetPasswordFailed = createAction("contact/resetPasswordFailed");
// resentCode actions creation
export const resentCodeRequest = createAction("contact/resentCodeRequest");
export const resentCodeSuccess = createAction("contact/resentCodeSuccess");
export const resentCodeFailed = createAction("contact/resentCodeFailed");
// deactivate actions creation
export const deactivateRequest = createAction("contact/deactivateRequest");
export const deactivateSuccess = createAction("contact/deactivateSuccess");
export const deactivateFailed = createAction("contact/deactivateFailed");
// activate actions creation
export const activateRequest = createAction("contact/activateRequest");
export const activateSuccess = createAction("contact/activateSuccess");
export const activateFailed = createAction("contact/activateFailed");
// getContactStatus actions creation
export const getContactStatusRequest = createAction("contact/getContactStatusRequest");
export const getContactStatusSuccess = createAction("contact/getContactStatusSuccess");
export const getContactStatusFailed = createAction("contact/getContactStatusFailed");

const initialState = {
  isOpenFilter: false,
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenView: false,
  isOpenUpdate: false,
  isOpenStatus: false,

  contactCreateSuccess: false,
  contactEditSuccess: false,
  contactDeleteSuccess: false,

  result: null,
  contactRowToUpdate: {},
  contactRowToViewStatus: {},
  contactRowToDelete: {},
  contactRowToView: {},
  isOpenMoreAction: false,
  dataGridUpdated: false,
  contactList: null,
  contactById: null,
  contactStatus: null,

  createError: null,
  creating: false,
  created: false,
  createdData: null,

  updateError: null,
  updating: false,
  updated: false,
  updatedData: null,

  deleteError: null,
  deleting: false,
  deleted: false,
  deletedData: null,

  getContactsListLoading: false,
  getContactsListSuccess: false,
  getContactsListError: null,

  getContactByIdLoading: false,
  getContactByIdSuccess: false,
  getContactByIdError: null,

  resetPasswordLoading: false,
  resetPasswordSuccess: false,
  resetPasswordError: null,

  resentCodeLoading: false,
  resentCodeSuccess: false,
  resentCodeError: null,

  deactivateLoading: false,
  deactivateSuccess: false,
  deactivateError: null,

  activateLoading: false,
  activateSuccess: false,
  activateError: null,

  getContactStatusLoading: false,
  getContactStatusSuccess: false,
  getContactStatusError: null,
};

export const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.isOpenFilter = !state.isOpenFilter;
    },

    toggleCreate: (state) => {
      state.isOpenCreate = !state.isOpenCreate;
    },

    toggleUpdate: (state, action) => {
      state.isOpenUpdate = !state.isOpenUpdate;
      state.contactRowToUpdate = action.payload;
    },

    toggleStatus: (state, action) => {
      state.isOpenStatus = !state.isOpenStatus;
      state.contactRowToViewStatus = action.payload;
    },

    toggleDelete: (state, action) => {
      state.isOpenDelete = !state.isOpenDelete;
      state.contactRowToDelete = action.payload;
    },
    toggleView: (state, action) => {
      state.contactRowToView = action.payload;
      state.isOpenView = !state.isOpenView;
    },
    initialise: (state) => {
      return initialState;
    },

    editSuccess: (state) => {
      state.contactEditSuccess = true;
    },

    gridActionType: (state, action) => {
      state.dataGridUpdated = true;
    },

    // Create
    createRequest: (state) => {
      mcrmToastLoading("Ajout du contact en cours...");
      state.dataGridUpdated = false;
      state.creating = true;
      state.created = false;
      state.createError = null;
      state.createdData = null;
    },

    createSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Contact ajouté avec success!");
      state.creating = false;
      state.created = true;
      state.createError = null;
      state.createdData = action.payload && action.payload;
    },

    createFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error.details);
      state.creating = false;
      state.created = true;
      state.createError = action.payload && action.payload.error;
    },

    // Update
    updateRequest: (state) => {
      mcrmToastLoading("Mise à jour du contact en cours...");
      state.updating = true;
      state.updated = false;
      state.updateError = null;
      state.updatedData = null;
    },

    updateSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Mise à jour effectuée avec success!");
      state.updating = false;
      state.updated = true;
      state.updateError = null;
      state.updatedData = action.payload && action.payload.data;
    },

    updateFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.updating = false;
      state.updated = true;
      state.updateError = action.payload && action.payload.error;
    },

    // Delete
    deleteRequest: (state) => {
      mcrmToastLoading("Suppression du contact en cours...");
      state.deleting = true;
      state.deleted = false;
      state.deleteError = null;
      state.deletedData = null;
    },

    deleteSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Contact supprimé avec success!");
      state.deleting = false;
      state.deleted = true;
      state.deleteError = null;
      state.deletedData = action.payload && action.payload.id;
    },

    deleteFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.deleting = false;
      state.deleted = true;
      state.deleteError = action.payload && action.payload.error;
    },

    // getContactsList
    getContactsListRequest: (state) => {
      state.getContactsListLoading = true;
      state.getContactsListSuccess = false;
      state.getContactsListError = null;
    },
    getContactsListSuccess: (state, action) => {
      state.getContactsListLoading = false;
      state.getContactsListSuccess = true;
      state.getContactsListError = null;
      state.contactList = action.payload.contactsList;
    },
    getContactsListFailed: (state, action) => {
      state.getContactsListLoading = false;
      state.getContactsListSuccess = true;
      state.getContactsListError = action.payload && action.payload.errorMessage;
    },
    // getContactById
    getContactByIdRequest: (state) => {
      state.getContactByIdLoading = true;
      state.getContactByIdSuccess = false;
      state.getContactByIdError = null;
    },
    getContactByIdSuccess: (state, action) => {
      state.getContactByIdLoading = false;
      state.getContactByIdSuccess = true;
      state.getContactByIdError = null;
      state.contactById = action.payload.contactById;
    },
    getContactByIdFailed: (state, action) => {
      state.getContactByIdLoading = false;
      state.getContactByIdSuccess = true;
      state.getContactByIdError = action.payload && action.payload.errorMessage;
    },
    // resetPassword
    resetPasswordRequest: (state) => {
      mcrmToastLoading("Reinitialisation du mot de passe en cours...");
      state.resetPasswordLoading = true;
      state.resetPasswordSuccess = false;
      state.resetPasswordError = null;
    },
    resetPasswordSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Mot de passe reinitialisé avec success!");
      state.resetPasswordLoading = false;
      state.resetPasswordSuccess = true;
      state.resetPasswordError = null;
    },
    resetPasswordFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.resetPasswordLoading = false;
      state.resetPasswordSuccess = true;
      state.resetPasswordError = action.payload && action.payload.errorMessage;
    },
    // resentCode
    resentCodeRequest: (state) => {
      mcrmToastLoading("Renvoie du code de vérification en cours...");
      state.resentCodeLoading = true;
      state.resentCodeSuccess = false;
      state.resentCodeError = null;
    },
    resentCodeSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Code de vérification renvoyé avec success!");
      state.resentCodeLoading = false;
      state.resentCodeSuccess = true;
      state.resentCodeError = null;
    },
    resentCodeFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.resentCodeLoading = false;
      state.resentCodeSuccess = true;
      state.resentCodeError = action.payload && action.payload.errorMessage;
    },
    // deactivate
    deactivateRequest: (state) => {
      mcrmToastLoading("Désactivation du compte en cours...");
      state.deactivateLoading = true;
      state.deactivateSuccess = false;
      state.deactivateError = null;
    },
    deactivateSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Compte désactivé avec success!");
      state.deactivateLoading = false;
      state.deactivateSuccess = true;
      state.deactivateError = null;
    },
    deactivateFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.deactivateLoading = false;
      state.deactivateSuccess = true;
      state.deactivateError = action.payload && action.payload.errorMessage;
    },
    // activate
    activateRequest: (state) => {
      mcrmToastLoading("Activation du compte en cours...");
      state.activateLoading = true;
      state.activateSuccess = false;
      state.activateError = null;
    },
    activateSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Compte activé avec success!");
      state.activateLoading = false;
      state.activateSuccess = true;
      state.activateError = null;
    },
    activateFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.activateLoading = false;
      state.activateSuccess = true;
      state.activateError = action.payload && action.payload.errorMessage;
    },
    // getContactStatus
    getContactStatusRequest: (state) => {
      state.contactStatus = null;
      state.getContactStatusLoading = true;
      state.getContactStatusSuccess = false;
      state.getContactStatusError = null;
    },
    getContactStatusSuccess: (state, action) => {
      state.getContactStatusLoading = false;
      state.getContactStatusSuccess = true;
      state.getContactStatusError = null;
      state.contactStatus = action.payload.contactStatus;
    },
    getContactStatusFailed: (state, action) => {
      state.getContactStatusLoading = false;
      state.getContactStatusSuccess = true;
      state.getContactStatusError = action.payload && action.payload.errorMessage;
    },
  },
  extraReducers: (builder) => {},
});

export default ContactSlice.reducer;
