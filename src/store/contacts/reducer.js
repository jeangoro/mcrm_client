import {
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  GET_CONTACTS_DATA,
  GET_REF_DATA,
    GET_CONTACTS_DETAIL
} from "./actionType";

const INIT_STATE = {
  contacts: [],
  refData: {},
  error: null
};

const Contacts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_CONTACTS_DATA:
          return {
            ...state,
            contacts: action.payload.data
          };
          case GET_REF_DATA:
            return {
              ...state,
              refData: action.payload.data
            };
        case GET_CONTACTS_DETAIL:
          return {
            ...state,
            details: action.payload.data
          };
        default:
          return state;
      }
    case API_RESPONSE_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default Contacts;
