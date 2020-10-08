import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function getDefaultCountry(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/countries/default`;
  const method = 'GET';
  return {
    type: 'GET_DEFAULT_COUNTRY',
    payload: handleAPI(url, filters, method, data)
  };
}

export function getCountriesList(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/countries`;
  const method = 'GET';
  return {
    type: 'GET_COUNTRIES_LIST',
    payload: handleAPI(url, filters, method, data)
  };
}

export function getCountry(id, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/countries/${id}`;
  const method = 'GET';
  return {
    type: 'GET_COUNTRY',
    payload: handleAPI(url, filters, method)
  };
}