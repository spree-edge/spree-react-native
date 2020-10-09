import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function addItem(auth_token, data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/cart/add_item`;
  const method = 'POST';
  return {
    type: 'ADD_ITEM',
    payload: handleAPI(url, filters, method, data, auth_token)
  };
}

export function getCart(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/cart`;
  const method = 'GET';
  return {
    type: 'GET_CART',
    payload: handleAPI(url, filters, method)
  };
}