
export const retrieveToken = (token, email) => ({
  type: 'RETRIEVE_TOKEN',
  payload: { token, email }
})

export const userLogin = (email, token) => ({
  type: 'LOGIN',
  payload: { email, token }
})

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
