import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  favourites: [],
  params: {
    priceRange: {
      minimum: '',
      maximum: '',
    },
    sizeFilterList: [
      {
        name: 'XS',
        active: false,
      },
      {
        name: 'S',
        active: false,
      },
      {
        name: 'M',
        active: false,
      },
      {
        name: 'L',
        active: false,
      },
      {
        name: 'XL',
        active: false,
      },
      {
        name: 'XXL',
        active: false,
      },
      {
        name: 'XXXL',
        active: false,
      }
    ]
  },
  freshProductList: false,
  isViewing: false,
  title: '',
  product: {
    variants: [
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
              },
              {
                url: ''
              },
            ]
          }
        ]
      }
    ],
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
          },
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
          },
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
        ],
        images: [
          {
            styles: [
              {url: ''},
              {url: ''},
              {url: ''},
              {url: ''}
            ]
          }
        ]
      }
    ],
    product_properties: [],
    default_variant: {
      option_values: [
        {
          presentation: ''
        },
        {
          presentation: ''
        }
      ]
    }
  },
  productsList: [
    {
      display_price: '$',
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
            },
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
            },
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
            },
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
        productsList: state.productsList.length !== 1 && !state.freshProductList
          ? [...state.productsList, ...dataFormatter.deserialize(response)] 
          : dataFormatter.deserialize(response),
        freshProductList: false,
        isViewing: true,
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
     * PRICE_RANGE
     */
    case 'SET_MINIMUM_PRICE_RANGE':
      return {
        ...state,
        params: {
          ...state.params,
          priceRange: {
            ...state.params.priceRange,
            minimum: action.payload,
          }
        }
      }

    case 'SET_MAXIMUM_PRICE_RANGE':
      return {
        ...state,
        params: {
          ...state.params,
          priceRange: {
            ...state.params.priceRange,
            maximum: action.payload,
          }
        }
      }
    
    /**
     * FRESH_PRODUCT_LIST
     */
    case 'SET_FRESH_PRODUCT_LIST':
      return {
        ...state,
        freshProductList: true
      }

    /**
     * RESET_PRODUCTS_LIST
     */
    case 'RESET_PRODUCTS_LIST':
      return {
        ...state,
        isViewing: false,
        productsList: []
      }

    /**
     * TOGGLE_PRODUCT_SIZE_FILTER
     */
    case 'TOGGLE_PRODUCT_SIZE_FILTER':
      return {
        ...state,
        params: {
          ...state.params,
          sizeFilterList: state.params.sizeFilterList.map(item => item.name !== action.payload.name ? item : { ...item, active: !item.active})
        }
      }
    
    /**
     * SET_PRODUCT_FAVOURITE
     */
    case 'SET_PRODUCT_FAVOURITE':
      return {
        ...state,
        favourites: [
          ...new Set([...state.favourites, action.payload])
        ]
      }
    
    /**
     * Default State
     */
    default:
      return state
  }
}