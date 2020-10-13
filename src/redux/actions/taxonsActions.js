import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function getTaxonsList(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/taxons`;
  const method = 'GET';
  return {
    type: 'GET_TAXONS_LIST',
    payload: handleAPI(url, filters, method)
  };
}

export function getTaxon(id, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/taxons/${id}`;
  const method = 'GET';
  return {
    type: 'GET_TAXON',
    payload: handleAPI(url, filters, method)
  };
}