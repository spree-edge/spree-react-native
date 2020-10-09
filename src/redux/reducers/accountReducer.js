import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  account: {}
};

let changes = null;
export default function accountReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  
  switch (action.type) {
    case 'ACCOUNT_CREATE_PENDING':
      return { ...state, saving: true };

    case 'ACCOUNT_CREATE_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'ACCOUNT_CREATE_FULFILLED':
      changes = {
        account: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    default:
      return state
  }
}