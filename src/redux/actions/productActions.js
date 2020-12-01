import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';
import QueryString from 'qs';

export function getProductsList(data, {pageIndex, filter}) {
  const url = `/${API_VERSION_STOREFRONT}/products`;
  const params = {
    include: 'images',
    filter: filter,
    page: pageIndex,
    per_page: 18
  }
  const method = 'GET';
  return {
    type: 'GET_PRODUCTS_LIST',
    payload: handleAPI(url, params, method, data)
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

export const toggleProductsSizeFilter = size => ({
  type: 'TOGGLE_PRODUCT_SIZE_FILTER',
  payload: size
})

export const setProductFavourite = variant => ({
  type: 'SET_PRODUCT_FAVOURITE',
  payload: variant
})

export const resetProductsList = () => ({
  type: 'RESET_PRODUCTS_LIST'
})

export const setPageIndex = pageIndex => ({
  type: 'SET_PAGE_INDEX',
  payload: pageIndex
})

export const resetProductsFilter = () => ({
  type: 'RESET_PRODUCTS_FILTER'
})