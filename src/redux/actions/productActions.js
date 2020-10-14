import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function getProductsList(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products`;
  const params = {
    include: 'images'
  }
  const method = 'GET';
  return {
    type: 'GET_PRODUCTS_LIST',
    payload: handleAPI(url, params, method, filters)
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