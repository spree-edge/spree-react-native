import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  product: {
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
    option_types: [
      {
        option_values: []
      },
      {
        option_values: []
      }
    ],
    variants: [
      {
        option_values: [
          {
            presentation: ''
          },
          {
            presentation: ''
          }
        ]
      }
    ],
    product_properties: []
  },
  productsList: [
    {
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
            }
          ]
        }
      ]
    }
  ],
};

let changes = null;
export default function productsReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    /**
     * GET_PRODUCTS_LIST
     */
    case 'GET_PRODUCTS_LIST_PENDING':
      return { ...state, saving: true };

    case 'GET_PRODUCTS_LIST_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_PRODUCTS_LIST_FULFILLED':
      changes = {
        // productsList: [...state.productsList, dataFormatter.deserialize(response)],
        productsList: state.productsList.length !== 1
          ? [...state.productsList, ...dataFormatter.deserialize(response)] 
          : dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };


    /**
     * GET_PRODUCT
     */
    case 'GET_PRODUCT_PENDING':
      return { ...state, saving: true };

    case 'GET_PRODUCT_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_PRODUCT_FULFILLED':
      changes = {
        product: dataFormatter.deserialize(response),
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