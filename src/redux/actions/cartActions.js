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

export function removeLineItem(lineItemId, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/cart/remove_line_item/${lineItemId}`;
  const method = 'DELETE';
  return {
    type: 'REMOVE_LINE_ITEM',
    payload: handleAPI(url, filters, method)
  };
}

export function setQuantity(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/cart/set_quantity`;
  const method = 'PATCH';
  return {
    type: 'SET_QUANTITY',
    payload: handleAPI(url, filters, method, data)
  };
}