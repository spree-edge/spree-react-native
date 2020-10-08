import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  cart: {}
};

let changes = null;
export default function cartReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    /**
     * ADD_ITEM
     */
    case 'ADD_ITEM_PENDING':
      return { ...state, saving: true };

    case 'ADD_ITEM_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'ADD_ITEM_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
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