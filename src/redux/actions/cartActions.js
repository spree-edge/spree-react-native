import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function addItem(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/cart/add_item`;
  const method = 'POST';
  return {
    type: 'ADD_ITEM',
    payload: handleAPI(url, filters, method, data)
  };
}