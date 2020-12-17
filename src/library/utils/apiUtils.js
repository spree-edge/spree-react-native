import axios from 'axios';
import qs from 'qs';
import { HOST } from '../../res/env'
import AsyncStorage from '@react-native-community/async-storage'

const API_VERSION_STOREFRONT = '/api/v2/storefront';
const API_ROOT = HOST;

async function getAuthToken() {
 
  const value = await AsyncStorage.getItem('userToken')

  return value;
}

async function handleAPI(path, params, method, data = null) {
  const authToken = await getAuthToken()
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${authToken}`,
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

export { handleAPI, API_VERSION_STOREFRONT };