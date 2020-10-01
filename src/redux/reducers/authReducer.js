import AsyncStorage from '@react-native-community/async-storage'

const DEFAULT_STATE = {
  saving: false,
  user: {}
};

let changes = null;
export default function authReducer(state = DEFAULT_STATE, action) {
  const response = action.payload && (action.payload.data || action.payload.response)
  switch (action.type) {
    case 'LOGIN_PENDING':
      return { ...state, saving: true };

    case 'LOGIN_REJECTED':
      changes = {
        saving: false
      };
      return { ...state, ...changes };

    case 'LOGIN_FULFILLED':
      changes = {
        ...response,
        saving: false
      };
      AsyncStorage.setItem('userToken', response.access_token)
      AsyncStorage.setItem('refreshToken', response.refresh_token)
      return { ...state, ...changes };

    case 'LOGOUT':
      AsyncStorage.removeItem('userToken')
      AsyncStorage.removeItem('refreshToken')
      return {
        isLoading: false
      }
      
    default:
      return state
  }
}
