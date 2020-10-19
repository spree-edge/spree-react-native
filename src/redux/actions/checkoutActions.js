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

export function getPaymentMethods(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/checkout/payment_methods`;
  const method = 'GET';
  return {
    type: 'GET_PAYMENT_METHODS',
    payload: handleAPI(url, filters, method)
  };
}

export function checkoutNext(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/checkout/next`;
  const method = 'PATCH';
  return {
    type: 'CHECKOUT_NEXT',
    payload: handleAPI(url, filters, method)
  };
}

export function updateCheckout(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/checkout`;

  const method = 'PATCH';
  return {
    type: 'UPDATE_CHECKOUT',
    payload: handleAPI(url, filters, method, data)
  };
}

export function completeCheckout(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/checkout/complete`;
  const method = 'PATCH';
  return {
    type: 'COMPLETE_CHECKOUT',
    payload: handleAPI(url, filters, method)
  };
}