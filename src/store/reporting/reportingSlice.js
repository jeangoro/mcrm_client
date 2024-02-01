import { createSlice, createAction } from "@reduxjs/toolkit";
import { mcrmToastLoading, mcrmToastUpdateError, mcrmToastUpdateSuccess } from "../../components/common/Toastify";

export const toggleFilter = createAction("reporting/toggleFilter");
export const toggleCreate = createAction("reporting/toggleCreate");
export const toggleUpdate = createAction("reporting/toggleUpdate");
export const toggleDelete = createAction("reporting/toggleDelete");
export const toggleView = createAction("reporting/toggleView");
export const initialise = createAction("reporting/initialise");

export const editSuccess = createAction("reporting/editSuccess");

export const gridActionType = createAction("reporting/gridActionType");

export const createRequest = createAction("reporting/createRequest");
export const createSuccess = createAction("reporting/createSuccess");
export const createFailed = createAction("reporting/createFailed");

export const updateRequest = createAction("reporting/updateRequest");
export const updateSuccess = createAction("reporting/updateSuccess");
export const updateFailed = createAction("reporting/updateFailed");

export const deleteRequest = createAction("reporting/deleteRequest");
export const deleteSuccess = createAction("reporting/deleteSuccess");
export const deleteFailed = createAction("reporting/deleteFailed");

const initialState = {
  isOpenFilter: false,
  isOpenCreate: false,
  isOpenDelete: false,
  isOpenView: false,
  isOpenUpdate: false,

  reportingCreateSuccess: false,
  reportingEditSuccess: false,
  reportingDeleteSuccess: false,

  result: null,
  reportingRowToUpdate: {},
  reportingRowToDelete: {},
  reportingRowToView: {},
  isOpenMoreAction: false,
  dataGridUpdated: false,

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
};

export const ReportingSlice = createSlice({
  name: "reporting",
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
      state.reportingRowToUpdate = action.payload;
    },

    toggleDelete: (state, action) => {
      state.isOpenDelete = !state.isOpenDelete;
      state.reportingRowToDelete = action.payload;
    },
    toggleView: (state, action) => {
      state.reportingRowToView = action.payload;
      state.isOpenView = !state.isOpenView;
    },
    initialise: (state) => {
      return initialState;
    },

    editSuccess: (state) => {
      state.reportingEditSuccess = true;
    },

    gridActionType: (state, action) => {
      state.dataGridUpdated = true;
    },

    // Create
    createRequest: (state) => {
      mcrmToastLoading("Ajout du reporting en cours...");
      state.dataGridUpdated = false;
      state.creating = true;
      state.created = false;
      state.createError = null;
      state.createdData = null;
    },

    createSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Reporting ajouté avec success!");
      state.creating = false;
      state.created = true;
      state.createError = null;
      state.createdData = action.payload && action.payload.data;
    },

    createFailed: (state, action) => {
      mcrmToastUpdateError(action.payload && action.payload.error.details);
      state.creating = false;
      state.created = true;
      state.createError = action.payload && action.payload.error;
    },

    // Update
    updateRequest: (state) => {
      mcrmToastLoading("Mise à jour du reporting en cours...");
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
      mcrmToastLoading("Suppression du reporting en cours...");
      state.deleting = true;
      state.deleted = false;
      state.deleteError = null;
      state.deletedData = null;
    },

    deleteSuccess: (state, action) => {
      mcrmToastUpdateSuccess("Reporting supprimé avec success!");
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
  },
  extraReducers: (builder) => {},
});

export default ReportingSlice.reducer;
