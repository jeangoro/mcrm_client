import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../components/common/Toastify";

export const toggleFilter = createAction("group/toggleFilter");
export const toggleCreate = createAction("group/toggleCreate");
export const toggleUpdate = createAction("group/toggleUpdate");
export const toggleDelete = createAction("group/toggleDelete");
export const toggleView = createAction("group/toggleView");
export const toggleSetUserGroup = createAction("group/toggleSetUserGroup");
export const toggleUnsetUserGroup = createAction("group/toggleUnsetUserGroup");
export const initialise = createAction("group/initialise");

export const editSuccess = createAction("group/editSuccess");

export const gridActionType = createAction("group/gridActionType");

export const createRequest = createAction("group/createRequest");
export const createSuccess = createAction("group/createSuccess");
export const createFailed = createAction("group/createFailed");

export const setUserGroupRequest = createAction("group/setUserGroupRequest");
export const setUserGroupSuccess = createAction("group/setUserGroupSuccess");
export const setUserGroupFailed = createAction("group/setUserGroupFailed");

export const unsetUserGroupRequest = createAction("group/unsetUserGroupRequest");
export const unsetUserGroupSuccess = createAction("group/unsetUserGroupSuccess");
export const unsetUserGroupFailed = createAction("group/unsetUserGroupFailed");

export const updateRequest = createAction("group/updateRequest");
export const updateSuccess = createAction("group/updateSuccess");
export const updateFailed = createAction("group/updateFailed");

export const deleteRequest = createAction("group/deleteRequest");
export const deleteSuccess = createAction("group/deleteSuccess");
export const deleteFailed = createAction("group/deleteFailed");

// getGroups actions creation
export const getGroupsListRequest = createAction("group/getGroupsListRequest");
export const getGroupsListSuccess = createAction("group/getGroupsListSuccess");
export const getGroupsListFailed = createAction("group/getGroupsListFailed");
// getUserGroupsList actions creation
export const getUserGroupsRequest = createAction("group/getUserGroupsRequest");
export const getUserGroupsSuccess = createAction("group/getUserGroupsSuccess");
export const getUserGroupsFailed = createAction("group/getUserGroupsFailed");

const initialState = {
  isOpenFilter: false,
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenView: false,
  isOpenUpdate: false,
  isOpenSetUserGroup: false,
  isOpenUnsetUserGroup: false,

  groupCreateSuccess: false,
  groupEditSuccess: false,
  groupDeleteSuccess: false,

  result: null,
  groupRowToUpdate: {},
  groupRowToDelete: {},
  groupRowToView: {},
  userRowToSetGroup: {},
  userRowToUnsetGroup: {},
  groupList: null,
  userGroupsList: null,
  isOpenMoreAction: false,
  dataGridUpdated: false,

  createError: null,
  creating: false,
  created: false,
  createdData: null,

  setUserGroupError: null,
  setUserGroupLoading: false,
  setUserGroupSuccess: false,
  setUserGroupData: null,

  unsetUserGroupError: null,
  unsetUserGroupLoading: false,
  unsetUserGroupSuccess: false,

  updateError: null,
  updating: false,
  updated: false,
  updatedData: null,

  deleteError: null,
  deleting: false,
  deleted: false,
  deletedData: null,

  getGroupsListLoading: false,
  getGroupsListSuccess: false,
  getGroupsListError: null,

  getUserGroupsLoading: false,
  getUserGroupsSuccess: false,
  getUserGroupsError: null,
};

export const GroupSlice = createSlice({
  name: "group",
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
      state.groupRowToUpdate = action.payload;
    },

    toggleDelete: (state, action) => {
      state.isOpenDelete = !state.isOpenDelete;
      state.groupRowToDelete = action.payload;
    },
    toggleView: (state, action) => {
      state.groupRowToView = action.payload;
      state.isOpenView = !state.isOpenView;
    },
    toggleSetUserGroup: (state, action) => {
      if (action.payload === false) {
        state.isOpenSetUserGroup = false;
      } else {
        state.isOpenSetUserGroup = !state.isOpenSetUserGroup;
      }
      state.userRowToSetGroup = action.payload;
    },
    initialise: (state) => {
      return initialState;
    },

    editSuccess: (state) => {
      state.groupEditSuccess = true;
    },

    gridActionType: (state, action) => {
      state.dataGridUpdated = true;
    },

    // Create
    createRequest: (state) => {
      mcrmToastLoading("Ajout du group en cours...");
      state.dataGridUpdated = false;
      state.creating = true;
      state.created = false;
      state.createError = null;
      state.createdData = null;
    },

    createSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Group ajouté avec success!");
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

    // SetUserGroup
    setUserGroupRequest: (state) => {
      mcrmToastLoading("Ajout du group à l'utilisateur en cours...");
      state.setUserGroupLoading = true;
      state.setUserGroupSuccess = false;
      state.setUserGroupError = null;
      state.setUserGroupData = null;
    },

    setUserGroupSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Ajout du group à l'utilisateur effectuée avec success!");
      state.setUserGroupLoading = false;
      state.setUserGroupSuccess = true;
      state.setUserGroupError = null;
      state.setUserGroupData = action.payload && action.payload.data;
    },

    setUserGroupFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.setUserGroupLoading = false;
      state.setUserGroupSuccess = true;
      state.setUserGroupError = action.payload && action.payload.error;
    },

    // UnsetUserGroup
    unsetUserGroupRequest: (state) => {
      mcrmToastLoading("Ajout du group à l'utilisateur en cours...");
      state.unsetUserGroupLoading = true;
      state.unsetUserGroupSuccess = false;
      state.unsetUserGroupError = null;
    },

    unsetUserGroupSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Ajout du group à l'utilisateur effectuée avec success!");
      state.unsetUserGroupLoading = false;
      state.unsetUserGroupSuccess = true;
      state.unsetUserGroupError = null;
    },

    unsetUserGroupFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.unsetUserGroupLoading = false;
      state.unsetUserGroupSuccess = true;
      state.unsetUserGroupError = action.payload && action.payload.error;
    },

    // Update
    updateRequest: (state) => {
      mcrmToastLoading("Mise à jour du group en cours...");
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
      mcrmToastLoading("Suppression du group en cours...");
      state.deleting = true;
      state.deleted = false;
      state.deleteError = null;
      state.deletedData = null;
    },

    deleteSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Group supprimé avec success!");
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

    // getGroupsList
    getGroupsListRequest: (state) => {
      state.getGroupsListLoading = true;
      state.getGroupsListSuccess = false;
      state.getGroupsListError = null;
    },
    getGroupsListSuccess: (state, action) => {
      state.getGroupsListLoading = false;
      state.getGroupsListSuccess = true;
      state.getGroupsListError = null;
      state.groupList = action.payload.groupsList;
    },
    getGroupsListFailed: (state, action) => {
      state.getGroupsListLoading = false;
      state.getGroupsListSuccess = true;
      state.getGroupsListError = action.payload && action.payload.errorMessage;
    },
    // getUserGroups
    getUserGroupsRequest: (state) => {
      state.userGroupsList = null;
      state.getUserGroupsLoading = true;
      state.getUserGroupsSuccess = false;
      state.getUserGroupsError = null;
    },
    getUserGroupsSuccess: (state, action) => {
      state.getUserGroupsLoading = false;
      state.getUserGroupsSuccess = true;
      state.getUserGroupsError = null;
      state.userGroupsList = action.payload.userGroupsList;
    },
    getUserGroupsFailed: (state, action) => {
      state.getUserGroupsLoading = false;
      state.getUserGroupsSuccess = true;
      state.getUserGroupsError = action.payload && action.payload.errorMessage;
    },
  },
  extraReducers: (builder) => {},
});

export default GroupSlice.reducer;
