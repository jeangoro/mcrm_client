import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../helpers/api_helper";

// findAllServiceProvider
const findAllServiceProviderApi = () => {
  return apiClient
    .get("/api/serviceProvider/findAll")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
export const findAllServiceProviderThunk = createAsyncThunk("referential/findAllServiceProvider", async (arg, thunkAPI) => {
  const { response, error } = await findAllServiceProviderApi();
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  if (response) {
    return fulfillWithValue(response.data.body);
  } else {
    return rejectWithValue(error.response.data);
  }
});

// findAllParameter
const findAllParameterApi = () => {
  return apiClient
    .get("/api/parameter/findAll")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
export const findAllParameterThunk = createAsyncThunk("referential/findAllParameter", async (arg, thunkAPI) => {
  const { response, error } = await findAllParameterApi();
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  if (response) {
    return fulfillWithValue(response.data.body);
  } else {
    return rejectWithValue(error.response.data);
  }
});

// findAllProduct
const findAllProductApi = () => {
  return apiClient
    .get("/api/product/findAll")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
export const findAllProductThunk = createAsyncThunk("referential/findAllProduct", async (arg, thunkAPI) => {
  const { response, error } = await findAllProductApi();
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  if (response) {
    return fulfillWithValue(response.data.body);
  } else {
    return rejectWithValue(error.response.data);
  }
});

// findAllCountry
const findAllCountriesByLangKeysApi = () => {
  return apiClient
    .get("/api/country/findAllByLangKeys?langKeys=fr")
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
export const findAllCountriesByLangKeysThunk = createAsyncThunk("referential/findAllCountriesByLangKeys", async (arg, thunkAPI) => {
  const { response, error } = await findAllCountriesByLangKeysApi();
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  if (response) {
    return fulfillWithValue(response.data.body);
  } else {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  // findAllServiceProvider
  agencies: null,
  partners: null,
  findAllServiceProviderError: null,
  findAllServiceProviderLoading: false,
  findAllServiceProviderSuccess: false,

  // findAllParameter
  genders: null,
  contactsType: null,
  leadsType: null,
  opportunities: null,
  leadsQualified: null,
  findAllParameterError: null,
  findAllParameterLoading: false,
  findAllParameterSuccess: false,

  // findAllProduct
  products: null,
  findAllProductError: null,
  findAllProductLoading: false,
  findAllProductSuccess: false,

  // findAllCountriesByLangKeys
  countries: null,
  findAllCountriesByLangKeysError: null,
  findAllCountriesByLangKeysLoading: false,
  findAllCountriesByLangKeysSuccess: false,
};

export const ReferentialSlice = createSlice({
  name: "referential",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // findAllServiceProvider
    builder.addCase(findAllServiceProviderThunk.pending, (state, action) => {
      state.findAllServiceProviderError = null;
      state.findAllServiceProviderLoading = true;
      state.findAllServiceProviderSuccess = false;
      state.agencies = null;
      state.partners = null;
    });
    builder.addCase(findAllServiceProviderThunk.fulfilled, (state, action) => {
      state.findAllServiceProviderError = null;
      state.findAllServiceProviderLoading = false;
      state.findAllServiceProviderSuccess = true;
      state.agencies = action.payload.agencies;
      state.partners = action.payload.partners;
    });
    builder.addCase(findAllServiceProviderThunk.rejected, (state, action) => {
      state.findAllServiceProviderError = action.payload && action.payload.message;
      state.findAllServiceProviderLoading = false;
      state.findAllServiceProviderSuccess = false;
      state.agencies = null;
      state.partners = null;
    });

    // findAllParameter
    builder.addCase(findAllParameterThunk.pending, (state, action) => {
      state.findAllParameterError = null;
      state.findAllParameterLoading = true;
      state.findAllParameterSuccess = false;
      state.genders = null;
      state.contactsType = null;
      state.leadsType = null;
      state.opportunities = null;
      state.leadsQualified = null;
    });
    builder.addCase(findAllParameterThunk.fulfilled, (state, action) => {
      state.findAllParameterError = null;
      state.findAllParameterLoading = false;
      state.findAllParameterSuccess = true;
      state.genders = action.payload.genders;
      state.contactsType = action.payload.contactsType;
      state.leadsType = action.payload.leadsType;
      state.opportunities = action.payload.opportunities;
      state.leadsQualified = action.payload.leadsQualified;
      state.contactStatus = action.payload.contactStatus;
      state.marketerType = action.payload.marketerType;
      state.enterpriseActivity = action.payload.enterpriseActivity;
      state.sourceContactType = action.payload.sourceContactType;
      state.enterpriseLegalStatus = action.payload.enterpriseLegalStatus;
      state.personalType = action.payload.personalType;
      state.civility = action.payload.civility;
    });
    builder.addCase(findAllParameterThunk.rejected, (state, action) => {
      state.findAllParameterError = action.payload && action.payload.message;
      state.findAllParameterLoading = false;
      state.findAllParameterSuccess = false;
      state.genders = null;
      state.contactsType = null;
      state.leadsType = null;
      state.opportunities = null;
      state.leadsQualified = null;
    });

    // findAllProduct
    builder.addCase(findAllProductThunk.pending, (state, action) => {
      state.findAllProductError = null;
      state.findAllProductLoading = true;
      state.findAllProductSuccess = false;
      state.products = null;
    });
    builder.addCase(findAllProductThunk.fulfilled, (state, action) => {
      state.findAllProductError = null;
      state.findAllProductLoading = false;
      state.findAllProductSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(findAllProductThunk.rejected, (state, action) => {
      state.findAllProductError = action.payload && action.payload.message;
      state.findAllProductLoading = false;
      state.findAllProductSuccess = false;
      state.products = null;
    });

    // findAllCountry
    builder.addCase(findAllCountriesByLangKeysThunk.pending, (state, action) => {
      state.findAllCountriesByLangKeysError = null;
      state.findAllCountriesByLangKeysLoading = true;
      state.findAllCountriesByLangKeysSuccess = false;
      state.countries = null;
    });
    builder.addCase(findAllCountriesByLangKeysThunk.fulfilled, (state, action) => {
      state.findAllCountriesByLangKeysError = null;
      state.findAllCountriesByLangKeysLoading = false;
      state.findAllCountriesByLangKeysSuccess = true;
      state.countries = action.payload;
    });
    builder.addCase(findAllCountriesByLangKeysThunk.rejected, (state, action) => {
      state.findAllCountriesByLangKeysError = action.payload && action.payload.message;
      state.findAllCountriesByLangKeysLoading = false;
      state.findAllCountriesByLangKeysSuccess = false;
      state.countries = null;
    });
  },
});

export default ReferentialSlice.reducer;
