import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../components/common/Toastify";

export const toggleFilter = createAction("authority/toggleFilter");
export const toggleCreate = createAction("authority/toggleCreate");
export const toggleUpdate = createAction("authority/toggleUpdate");
export const toggleDelete = createAction("authority/toggleDelete");
export const toggleView = createAction("authority/toggleView");
// export const setAuthorityUrl = createAction("authority/setAuthorityUrl");
// export const setAuthorityFilterData = createAction("authority/setAuthorityFilterData");
export const toggleSetGroupAuthority = createAction("authority/toggleSetGroupAuthority");
export const toggleUnsetGroupAuthority = createAction("authority/toggleUnsetGroupAuthority");
export const initialise = createAction("authority/initialise");

export const editSuccess = createAction("authority/editSuccess");

export const gridActionType = createAction("authority/gridActionType");

export const createRequest = createAction("authority/createRequest");
export const createSuccess = createAction("authority/createSuccess");
export const createFailed = createAction("authority/createFailed");

export const updateRequest = createAction("authority/updateRequest");
export const updateSuccess = createAction("authority/updateSuccess");
export const updateFailed = createAction("authority/updateFailed");

export const deleteRequest = createAction("authority/deleteRequest");
export const deleteSuccess = createAction("authority/deleteSuccess");
export const deleteFailed = createAction("authority/deleteFailed");

// getAutority actions creation
export const getAuthoritiesRequest = createAction("authority/getAuthoritiesRequest");
export const getAuthoritiesSuccess = createAction("authority/getAuthoritiesSuccess");
export const getAuthoritiesFailed = createAction("authority/getAuthoritiesFailed");
// getAutority actions creation
export const getGroupAuthoritiesRequest = createAction("authority/getGroupAuthoritiesRequest");
export const getGroupAuthoritiesSuccess = createAction("authority/getGroupAuthoritiesSuccess");
export const getGroupAuthoritiesFailed = createAction("authority/getGroupAuthoritiesFailed");
// addAutority actions creation
// export const addAuthorityRequest = createAction("authority/addAuthorityRequest");
// export const addAuthoritySuccess = createAction("authority/addAuthoritySuccess");
// export const addAuthorityFailed = createAction("authority/addAuthorityFailed");
// deleteAuthority actions creation
// export const deleteAuthorityRequest = createAction("authority/deleteAuthorityRequest");
// export const deleteAuthoritySuccess = createAction("authority/deleteAuthoritySuccess");
// export const deleteAuthorityFailed = createAction("authority/deleteAuthorityFailed");
// setGroupAuthority actions creation
export const setGroupAuthorityRequest = createAction("authority/setGroupAuthorityRequest");
export const setGroupAuthoritySuccess = createAction("authority/setGroupAuthoritySuccess");
export const setGroupAuthorityFailed = createAction("authority/setGroupAuthorityFailed");
// unsetGroupAuthority actions creation
export const unsetGroupAuthorityRequest = createAction("authority/unsetGroupAuthorityRequest");
export const unsetGroupAuthoritySuccess = createAction("authority/unsetGroupAuthoritySuccess");
export const unsetGroupAuthorityFailed = createAction("authority/unsetGroupAuthorityFailed");
// getUserAuthorities actions creation
export const getUserAuthoritiesRequest = createAction("authority/getUserAuthoritiesRequest");
export const getUserAuthoritiesSuccess = createAction("authority/getUserAuthoritiesSuccess");
export const getUserAuthoritiesFailed = createAction("authority/getUserAuthoritiesFailed");

const initialState = {
  isOpenFilter: false,
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenView: false,
  isOpenUpdate: false,
  isOpenSetGroupAuthority: false,
  isOpenUnsetGroupAuthority: false,

  authorityCreateSuccess: false,
  authorityEditSuccess: false,
  authorityDeleteSuccess: false,

  result: null,

  authorityList: null,
  groupAuthorities: null,
  authorityRowToUpdate: {},
  authorityRowToDelete: {},
  authorityRowToView: {},
  authorityRowToSetGroup: {},
  authorityRowToUnsetGroup: {},
  isOpenMoreAction: false,
  dataGridUpdated: false,
  userAuthorities: [],

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

  getAuthoritiesLoading: false,
  getAuthoritiesSuccess: false,
  getAuthoritiesError: null,

  getGroupAuthoritiesLoading: false,
  getGroupAuthoritiesSuccess: false,
  getGroupAuthoritiesError: null,

  setGroupAuthorityLoading: false,
  setGroupAuthoritySuccess: false,
  setGroupAuthorityError: null,

  unsetGroupAuthorityLoading: false,
  unsetGroupAuthoritySuccess: false,
  unsetGroupAuthorityError: null,

  getUserAuthoritiesLoading: false,
  getUserAuthoritiesSuccess: false,
  getUserAuthoritiesError: null,
};

export const AuthoritySlice = createSlice({
  name: "authority",
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
      state.authorityRowToUpdate = action.payload;
    },

    toggleDelete: (state, action) => {
      state.isOpenDelete = !state.isOpenDelete;
      state.authorityRowToDelete = action.payload;
    },
    toggleView: (state, action) => {
      state.authorityRowToView = action.payload;
      state.isOpenView = !state.isOpenView;
    },

    toggleSetGroupAuthority: (state, action) => {
      if (action.payload === false) {
        state.isOpenSetGroupAuthority = false;
      } else {
        state.isOpenSetGroupAuthority = !state.isOpenSetGroupAuthority;
        state.authorityRowToSetGroup = action.payload;
      }
    },
    toggleUnsetGroupAuthority: (state, action) => {
      state.authorityRowToUnsetGroup = action.payload;
      state.isOpenUnsetGroupAuthority = !state.isOpenUnsetGroupAuthority;
    },
    // setAuthorityUrl: (state, action) => {
    //   state.authorityUrl = action.payload;
    // },
    // setAuthorityFilterData: (state, action) => {
    //   if (action.payload === null) {
    //     state.authorityUrl = "api/authority";
    //     state.authorityFilterData = null;
    //   } else {
    //     state.authorityUrl = "api/authority/group/" + action.payload;
    //     state.authorityFilterData = action.payload;
    //   }
    // },
    initialise: (state) => {
      return initialState;
    },

    editSuccess: (state) => {
      state.authorityEditSuccess = true;
    },

    gridActionType: (state, action) => {
      state.dataGridUpdated = true;
    },

    // Create
    createRequest: (state) => {
      mcrmToastLoading("Ajout du authority en cours...");
      state.dataGridUpdated = false;
      state.creating = true;
      state.created = false;
      state.createError = null;
      state.createdData = null;
    },

    createSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Authority ajouté avec success!");
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
      mcrmToastLoading("Mise à jour du authority en cours...");
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
      mcrmToastLoading("Suppression du authority en cours...");
      state.deleting = true;
      state.deleted = false;
      state.deleteError = null;
      state.deletedData = null;
    },

    deleteSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Authority supprimé avec success!");
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

    // getAuthorities
    getAuthoritiesRequest: (state) => {
      state.getAuthoritiesLoading = true;
      state.getAuthoritiesSuccess = false;
      state.getAuthoritiesError = null;
    },
    getAuthoritiesSuccess: (state, action) => {
      state.getAuthoritiesLoading = false;
      state.getAuthoritiesSuccess = true;
      state.getAuthoritiesError = null;
      state.authorityList = action.payload.autorisations;
    },
    getAuthoritiesFailed: (state, action) => {
      state.getAuthoritiesLoading = false;
      state.getAuthoritiesSuccess = true;
      state.getAuthoritiesError = action.payload && action.payload.errorMessage;
    },

    // get groupe's Authorities
    getGroupAuthoritiesRequest: (state) => {
      state.groupAuthorities = null;
      state.getGroupAuthoritiesLoading = true;
      state.getGroupAuthoritiesSuccess = false;
      state.getGroupAuthoritiesError = null;
    },
    getGroupAuthoritiesSuccess: (state, action) => {
      state.getGroupAuthoritiesLoading = false;
      state.getGroupAuthoritiesSuccess = true;
      state.getGroupAuthoritiesError = null;
      state.groupAuthorities = action.payload.groupAutorisations;
    },
    getGroupAuthoritiesFailed: (state, action) => {
      state.getGroupAuthoritiesLoading = false;
      state.getGroupAuthoritiesSuccess = true;
      if (action.payload && action.payload.errorMessage) {
        state.getGroupAuthoritiesError = action.payload && action.payload.errorMessage;
      } else {
        state.getGroupAuthoritiesError = action.payload && action.payload.error;
      }
    },

    // setGroupAuthority
    setGroupAuthorityRequest: (state) => {
      mcrmToastLoading("Ajout de l'autorisation en cours...");
      state.setGroupAuthorityLoading = true;
      state.setGroupAuthoritySuccess = false;
      state.setGroupAuthorityError = null;
    },
    setGroupAuthoritySuccess: (state, action) => {
      mcrmToastUpdateSuccess("Autorisation ajoutée avec success!");
      state.setGroupAuthorityLoading = false;
      state.setGroupAuthoritySuccess = true;
      state.setGroupAuthorityError = null;
      // state.isOpenSetGroupAuthority = !state.isOpenSetGroupAuthority;
    },
    setGroupAuthorityFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.setGroupAuthorityLoading = false;
      state.setGroupAuthoritySuccess = true;
      if (action.payload && action.payload.errorMessage) {
        state.setGroupAuthorityError = action.payload && action.payload.errorMessage;
      } else {
        state.setGroupAuthorityError = action.payload && action.payload.error;
      }
    },

    // unsetGroupAuthority
    unsetGroupAuthorityRequest: (state) => {
      mcrmToastLoading("Suppression de l'autorisation en cours...");
      state.unsetGroupAuthorityLoading = true;
      state.unsetGroupAuthoritySuccess = false;
      state.unsetGroupAuthorityError = null;
    },
    unsetGroupAuthoritySuccess: (state, action) => {
      mcrmToastUpdateSuccess("Autorisation supprimé avec success!");
      state.unsetGroupAuthorityLoading = false;
      state.unsetGroupAuthoritySuccess = true;
      state.unsetGroupAuthorityError = null;
    },
    unsetGroupAuthorityFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error);
      state.unsetGroupAuthorityLoading = false;
      state.unsetGroupAuthoritySuccess = true;
      if (action.payload && action.payload.errorMessage) {
        state.unsetGroupAuthorityError = action.payload && action.payload.errorMessage;
      } else {
        state.unsetGroupAuthorityError = action.payload && action.payload.error;
      }
    },

    // getUserAuthorities
    getUserAuthoritiesRequest: (state) => {
      // mcrmToastLoading("Suppression de l'autorisation en cours...");
      state.userAuthorities = [];
      state.getUserAuthoritiesLoading = true;
      state.getUserAuthoritiesSuccess = false;
      state.getUserAuthoritiesError = null;
    },
    getUserAuthoritiesSuccess: (state, action) => {
      // mcrmToastUpdateSuccess("Autorisation supprimé avec success!");
      state.getUserAuthoritiesLoading = false;
      state.getUserAuthoritiesSuccess = true;
      state.getUserAuthoritiesError = null;
      state.userAuthorities = [...state.userAuthorities, ...action.payload.userAuthorities];
    },
    getUserAuthoritiesFailed: (state, action) => {
      // mcrmToastUpdateError(action.payload && action.payload.error);
      state.getUserAuthoritiesLoading = false;
      state.getUserAuthoritiesSuccess = true;
      if (action.payload && action.payload.errorMessage) {
        state.getUserAuthoritiesError = action.payload && action.payload.errorMessage;
      } else {
        state.getUserAuthoritiesError = action.payload && action.payload.error;
      }
    },
  },
  extraReducers: (builder) => {},
});

export default AuthoritySlice.reducer;
