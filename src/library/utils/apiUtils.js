import axios from 'axios';
import qs from 'qs';
//import { API_ROOT } from '../../env';

const API_VERSION_STOREFRONT = '/api/v2/storefront';
const API_ROOT = 'http://192.168.1.7:3000';

function handleAPI( path, params, method, data = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer hln3q8zoSVYHFEh3TWUXhHTO6iAW_KFH_9is5maEZtk`,
    // 'Authorization': `Bearer ${auth_token}`,
    // 'Content-Length': data.length
  };
  // debugger
  let url = API_ROOT + path;
  url = url +'?'+ qs.stringify(params, { arrayFormat: 'brackets' })
  // debugger

  return axios({
    method,
    url,
    data,
    headers
  });
}

export { handleAPI, API_VERSION_STOREFRONT };