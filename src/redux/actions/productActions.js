import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function getProductsList(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products`;
  const method = 'GET';
  return {
    type: 'GET_PRODUCTS_LIST',
    payload: handleAPI(url, filters, method, data)
  };
}

export function getProduct(id, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products/${id}`;
  const method = 'GET';
  return {
    type: 'GET_PRODUCT',
    payload: handleAPI(url, filters, method)
  };
}