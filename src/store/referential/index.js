import {findAllServiceProviderThunk, findAllParameterThunk, findAllProductThunk, findAllCountriesByLangKeysThunk} from './referentialSlice';

// findAllServiceProvider
export const findAllServiceProvider = (dispatch) => {
    dispatch(findAllServiceProviderThunk())
}

// findAllParameter
export const findAllParameter = (dispatch) => {
    dispatch(findAllParameterThunk())
}

// findAllParameter
export const findAllProduct = (dispatch) => {
    dispatch(findAllProductThunk())
}

// findAllCountry
export const findAllCountry = (dispatch) => {
    dispatch(findAllCountriesByLangKeysThunk())
}
