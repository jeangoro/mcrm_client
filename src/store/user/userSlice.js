import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../components/common/Toastify";

export const toggleFilter = createAction("user/toggleFilter");
export const toggleCreate = createAction("user/toggleCreate");
export const toggleUpdate = createAction("user/toggleUpdate");
export const toggleStatus = createAction("user/toggleStatus");
export const toggleDelete = createAction("user/toggleDelete");
export const toggleView = createAction("user/toggleView");
export const initialise = createAction("user/initialise");

export const editSuccess = createAction("user/editSuccess");

export const gridActionType = createAction("user/gridActionType");

export const createRequest = createAction("user/createRequest");
export const createSuccess = createAction("user/createSuccess");
export const createFailed = createAction("user/createFailed");

export const updateRequest = createAction("user/updateRequest");
export const updateSuccess = createAction("user/updateSuccess");
export const updateFailed = createAction("user/updateFailed");

export const deleteRequest = createAction("user/deleteRequest");
export const deleteSuccess = createAction("user/deleteSuccess");
export const deleteFailed = createAction("user/deleteFailed");

// getUsersList actions creation
export const getUsersListRequest = createAction("user/getUsersListRequest");
export const getUsersListSuccess = createAction("user/getUsersListSuccess");
export const getUsersListFailed = createAction("user/getUsersListFailed");
// getUserById actions creation
export const getUserByIdRequest = createAction("user/getUserByIdRequest");
export const getUserByIdSuccess = createAction("user/getUserByIdSuccess");
export const getUserByIdFailed = createAction("user/getUserByIdFailed");
// resetPassword actions creation
export const resetPasswordRequest = createAction("user/resetPasswordRequest");
export const resetPasswordSuccess = createAction("user/resetPasswordSuccess");
export const resetPasswordFailed = createAction("user/resetPasswordFailed");
// resentCode actions creation
export const resentCodeRequest = createAction("user/resentCodeRequest");
export const resentCodeSuccess = createAction("user/resentCodeSuccess");
export const resentCodeFailed = createAction("user/resentCodeFailed");
// deactivate actions creation
export const deactivateRequest = createAction("user/deactivateRequest");
export const deactivateSuccess = createAction("user/deactivateSuccess");
export const deactivateFailed = createAction("user/deactivateFailed");
// activate actions creation
export const activateRequest = createAction("user/activateRequest");
export const activateSuccess = createAction("user/activateSuccess");
export const activateFailed = createAction("user/activateFailed");
// getUserStatus actions creation
export const getUserStatusRequest = createAction("user/getUserStatusRequest");
export const getUserStatusSuccess = createAction("user/getUserStatusSuccess");
export const getUserStatusFailed = createAction("user/getUserStatusFailed");

const initialState = {
  isOpenFilter: false,
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenView: false,
  isOpenUpdate: false,
  isOpenStatus: false,

  userCreateSuccess: false,
  userEditSuccess: false,
  userDeleteSuccess: false,

  result: null,
  userRowToUpdate: {},
  userRowToViewStatus: {},
  userRowToDelete: {},
  userRowToView: {},
  isOpenMoreAction: false,
  dataGridUpdated: false,
  userList: null,
  userById: null,
  userStatus: null,

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

  getUsersListLoading: false,
  getUsersListSuccess: false,
  getUsersListError: null,

  getUserByIdLoading: false,
  getUserByIdSuccess: false,
  getUserByIdError: null,

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

  getUserStatusLoading: false,
  getUserStatusSuccess: false,
  getUserStatusError: null,
};

export const UserSlice = createSlice({
  name: "user",
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
      state.userRowToUpdate = action.payload;
    },

    toggleStatus: (state, action) => {
      if (action.payload === false) {
        state.isOpenStatus = false;
      } else {
        state.isOpenStatus = !state.isOpenStatus;
      }
      state.userRowToViewStatus = action.payload;
    },

    toggleDelete: (state, action) => {
      state.isOpenDelete = !state.isOpenDelete;
      state.userRowToDelete = action.payload;
    },
    toggleView: (state, action) => {
      state.userRowToView = action.payload;
      state.isOpenView = !state.isOpenView;
    },
    initialise: (state) => {
      return initialState;
    },

    editSuccess: (state) => {
      state.userEditSuccess = true;
    },

    gridActionType: (state, action) => {
      state.dataGridUpdated = true;
    },

    // Create
    createRequest: (state) => {
      mcrmToastLoading("Ajout du user en cours...");
      state.dataGridUpdated = false;
      state.creating = true;
      state.created = false;
      state.createError = null;
      state.createdData = null;
    },

    createSuccess: (state, action) => {
      mcrmToastUpdateSuccess("User ajouté avec success!");
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
      mcrmToastLoading("Mise à jour du user en cours...");
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
      mcrmToastLoading("Suppression du user en cours...");
      state.deleting = true;
      state.deleted = false;
      state.deleteError = null;
      state.deletedData = null;
    },

    deleteSuccess: (state, action) => {
      mcrmToastUpdateSuccess("User supprimé avec success!");
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

    // getUsersList
    getUsersListRequest: (state) => {
      state.getUsersListLoading = true;
      state.getUsersListSuccess = false;
      state.getUsersListError = null;
    },
    getUsersListSuccess: (state, action) => {
      state.getUsersListLoading = false;
      state.getUsersListSuccess = true;
      state.getUsersListError = null;
      state.userList = action.payload.usersList;
    },
    getUsersListFailed: (state, action) => {
      state.getUsersListLoading = false;
      state.getUsersListSuccess = true;
      state.getUsersListError = action.payload && action.payload.errorMessage;
    },
    // getUserById
    getUserByIdRequest: (state) => {
      state.getUserByIdLoading = true;
      state.getUserByIdSuccess = false;
      state.getUserByIdError = null;
    },
    getUserByIdSuccess: (state, action) => {
      state.getUserByIdLoading = false;
      state.getUserByIdSuccess = true;
      state.getUserByIdError = null;
      state.userById = action.payload.userById;
    },
    getUserByIdFailed: (state, action) => {
      state.getUserByIdLoading = false;
      state.getUserByIdSuccess = true;
      state.getUserByIdError = action.payload && action.payload.errorMessage;
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
    // getUserStatus
    getUserStatusRequest: (state) => {
      state.userStatus = null;
      state.getUserStatusLoading = true;
      state.getUserStatusSuccess = false;
      state.getUserStatusError = null;
    },
    getUserStatusSuccess: (state, action) => {
      state.getUserStatusLoading = false;
      state.getUserStatusSuccess = true;
      state.getUserStatusError = null;
      state.userStatus = action.payload.userStatus;
    },
    getUserStatusFailed: (state, action) => {
      state.getUserStatusLoading = false;
      state.getUserStatusSuccess = true;
      state.getUserStatusError = action.payload && action.payload.errorMessage;
    },
  },
  extraReducers: (builder) => {},
});

export default UserSlice.reducer;
