import axios from 'axios'
import qs from 'qs'
import AsyncStorage from '@react-native-community/async-storage'

const API_ROOT = 'http://localhost:3000/api/v2/storefront'

// const API_VERSION_ONE_ADMIN = 'admin/v1';
// const API_VERSION_ONE = 'v1';

function handleAPI(method, path, params, data = null) {
  const headers = {
    'Content-Type': 'application/vnd.api+json',
    // 'Accept': 'application/json',
    'Authorization': async() => await AsyncStorage.getItem('userToken') || '',
    // 'Suite-Name': process.env.REACT_APP_SUITE_NAME,
    // 'Store-Id': localStorage.getItem('StoreID'),
  };
  let url = API_ROOT + path;
  url = url +'?'+ qs.stringify(params, { arrayFormat: 'brackets' })
  return axios({
    method,
    url,
    data,
    headers
  });
}

export { handleAPI/* , API_VERSION_ONE_ADMIN, API_VERSION_ONE */ }