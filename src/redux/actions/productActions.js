import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function getProductsList(pageIndex, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products`;
  const params = {
    include: 'images',
    page: pageIndex,
    per_page: 18
  }
  const method = 'GET';
  return {
    type: 'GET_PRODUCTS_LIST',
    payload: handleAPI(url, params, method, filters)
  };
}

export function getProduct(id, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products/${id}`;
  const params = {
    include: 'images,variants.option_values,product_properties'
  }
  const method = 'GET';
  return {
    type: 'GET_PRODUCT',
    payload: handleAPI(url, params, method, filters)
  };
}