import Jsona from 'jsona';
const dataFormatter = new Jsona();

const DEFAULT_STATE = {
  saving: false,
  taxon: {
    products : [
      {
        display_price: '',
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
        ]
      }
    ]
  },
  taxonsList: [
    {
      children: []
    }
  ],
};

let changes = null;
export default function taxonsReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    /**
     * GET_TAXONS_LIST
     */
    case 'GET_TAXONS_LIST_PENDING':
      return { ...state, saving: true };

    case 'GET_TAXONS_LIST_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_TAXONS_LIST_FULFILLED':
      changes = {
        taxonsList: dataFormatter.deserialize(response),
        saving: false
      };
      return { ...state, ...changes };


    /**
     * GET_TAXON
     */
    case 'GET_TAXON_PENDING':
      return { ...state, saving: true };

    case 'GET_TAXON_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'GET_TAXON_FULFILLED':
      changes = {
        taxon: dataFormatter.deserialize(response),
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