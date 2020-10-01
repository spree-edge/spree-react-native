import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import accountReducer from './reducers/accountReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer
})

export default rootReducer