const initialAuthState = {
  isLoading: true,
  userName: null,
  userToken: null
}

const authReducer = (prevState = initialAuthState, action) => {
  switch( action.type ) {
    case 'RETRIEVE_TOKEN':
      return {
        ...prevState,
        userToken: action.payload.token,
        isLoading: false
      }
    case 'LOGIN':
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false
      }
    case 'LOGOUT':
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false
      }
    case 'REGISTER':
      return {
        ...prevState,
        email: action.payload.email,
        password: action.payload.password,
        isLoading: false
      }
    default: return prevState
  }
}

export default authReducer