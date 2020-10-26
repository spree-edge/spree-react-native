import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';
import QueryString from 'qs';

export function getProductsList({pageIndex, queryString}, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/products`;
  const params = {
    include: 'images',
    filter: {
      name: queryString || '',
    },
    page: pageIndex,
    per_page: 18
  }
  const method = 'GET';
  // debugger
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

export function setMinimumPriceRange(minimum) {
  return {
    type: 'SET_MINIMUM_PRICE_RANGE',
    payload: minimum
  }
}

export function setMaximumPriceRange(maximum) {
  return {
    type: 'SET_MAXIMUM_PRICE_RANGE',
    payload: maximum
  }
}

export function setFreshProductList() {
  return {
    type: 'SET_FRESH_PRODUCT_LIST',
  }
}