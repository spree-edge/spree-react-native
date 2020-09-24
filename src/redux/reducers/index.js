const initialAuthState = {
  isLoading: true,
  userName: null,
  email: null,
  userToken: null,
}

const authReducer = (prevState = initialAuthState, action) => {
  switch( action.type ) {
    case 'RETRIEVE_TOKEN':
      return {
        ...prevState,
        userToken: action.payload.token,
        email: action.payload.email,
        isLoading: false
      }
    case 'LOGIN':
      return {
        ...prevState,
        email: action.payload.email,
        userToken: action.payload.token,
        isLoading: false
      }
    case 'LOGOUT':
      return {
        ...prevState,
        userName: null,
        userToken: null,
        email: null,
        isLoading: false
      }
    case 'REGISTER':
      return {
        ...prevState,
        userName: action.payload.userName,
        email: action.payload.email,
        isLoading: false
      }
    default: return prevState
  }
}

export default authReducer