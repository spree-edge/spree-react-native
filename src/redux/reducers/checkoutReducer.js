import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  defaultCountry: {
    states: [],
    iso: null
  },
  countriesList: [],
  country: {}
};

let changes = null;
export default function checkoutReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    /**
     * GET_DEFAULT_COUNTRY
     */
    case 'GET_DEFAULT_COUNTRY_PENDING':
      return { ...state, saving: true };

    case 'GET_DEFAULT_COUNTRY_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_DEFAULT_COUNTRY_FULFILLED':
      changes = {
        defaultCountry: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * GET_COUNTRIES_LIST
     */
    case 'GET_COUNTRIES_LIST_PENDING':
      return { ...state, saving: true };

    case 'GET_COUNTRIES_LIST_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_COUNTRIES_LIST_FULFILLED':
      changes = {
        countriesList: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * GET_COUNTRY
     */
    case 'GET_COUNTRY_PENDING':
      return { ...state, saving: true };

    case 'GET_COUNTRY_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_COUNTRY_FULFILLED':
      changes = {
        country: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * Default State
     */
    default:
      return state
  }
}