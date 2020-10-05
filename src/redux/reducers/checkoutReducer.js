import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  country: {}
};

let changes = null;
export default function checkoutReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    case 'GET_DEFAULT_COUNTRY_PENDING':
      return { ...state, saving: true };

    case 'GET_DEFAULT_COUNTRY_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_DEFAULT_COUNTRY_FULFILLED':
      changes = {
        country: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    default:
      return state
  }
}