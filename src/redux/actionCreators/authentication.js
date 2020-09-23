
export const retrieveToken = token => ({
  type: 'RETRIEVE_TOKEN',
  payload: { token }
})

export const userLogin = (id, token) => ({
  type: 'LOGIN',
  payload: { id, token }
})

export const userLogout = () => ({
  type: 'LOGOUT'
})

export const userRegister = (email, password, confPassword) => ({
  type: 'REGISTER',
  payload: {
    email,
    password,
    confPassword
  }
})
