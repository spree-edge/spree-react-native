import { handleAPI } from '../../library/utils/apiUtils';

export function userLogin(data, filters={}) {
  const url = `/spree_oauth/token`;
  const method = 'POST';
  return {
    type: 'LOGIN',
    payload: handleAPI(url, filters, method, data)
  };
} 

export const userLogout = () => ({
  type: 'LOGOUT'
})