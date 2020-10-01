import { handleAPI } from '../../utils/apiUtils';

export function userLogin(data, filters={}) {
  //const url = `/${API_VERSION_ONE}/sessions/`;
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

export const userRegister = (userName, email) => ({
  type: 'REGISTER',
  payload: {
    userName,
    email
  }
})
