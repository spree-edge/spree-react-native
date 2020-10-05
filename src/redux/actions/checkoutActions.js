import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function defaultCountry(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/countries/default`;
  const method = 'GET';
  return {
    type: 'GET_DEFAULT_COUNTRY',
    payload: handleAPI(url, filters, method, data)
  };
}