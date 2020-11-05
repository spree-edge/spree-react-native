import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  country: {
    states: [],
    iso: null
  },
  countriesList: [],
  paymentMethods: [],
  cart: {
    line_items: [
      {
        variant: {
          images: [
            {
              styles: [
                {
                  url: ''
                },
                {
                  url: ''
                },
                {
                  url: ''
                },
                {
                  url: ''
                }
              ]
            }
          ],
          option_values: [
            {
              presentation: ''
            },
            {
              presentation: ''
            }
          ]
        }
      }
    ]
  }
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
        country: dataFormatter.deserialize(response),
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
     * GET_PAYMENT_METHODS
     */
    case 'GET_PAYMENT_METHODS_PENDING':
      return { ...state, saving: true };

    case 'GET_PAYMENT_METHODS_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_PAYMENT_METHODS_FULFILLED':
      changes = {
        paymentMethods: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * CHECKOUT_NEXT
     */
    case 'CHECKOUT_NEXT_PENDING':
      return { ...state, saving: true };

    case 'CHECKOUT_NEXT_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'CHECKOUT_NEXT_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * UPDATE_CHECKOUT
     */
    case 'UPDATE_CHECKOUT_PENDING':
      return { ...state, saving: true };

    case 'UPDATE_CHECKOUT_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'UPDATE_CHECKOUT_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * COMPLETE_CHECKOUT
     */
    case 'COMPLETE_CHECKOUT_PENDING':
      return { ...state, saving: true };

    case 'COMPLETE_CHECKOUT_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'COMPLETE_CHECKOUT_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * GET_CART
     */
    case 'GET_CART_PENDING':
      return { ...state, saving: true };

    case 'GET_CART_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_CART_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

    /**
     * CREATE_CART
     */
    case 'CREATE_CART_PENDING':
      return { ...state, saving: true };

    case 'CREATE_CART_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'CREATE_CART_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };

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
     * SET_QUANTITY
     */
    case 'SET_QUANTITY_PENDING':
      return { ...state, saving: true };

    case 'SET_QUANTITY_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'SET_QUANTITY_FULFILLED':
      changes = {
        cart: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };
    
    /**
     * REMOVE_LINE_ITEM
     */
    case 'REMOVE_LINE_ITEM_PENDING':
      return { ...state, saving: true };

    case 'REMOVE_LINE_ITEM_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'REMOVE_LINE_ITEM_FULFILLED':
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