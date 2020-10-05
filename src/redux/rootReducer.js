import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import accountReducer from './reducers/accountReducer'
import checkoutReducer from './reducers/checkoutReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  checkout: checkoutReducer,
})

export default rootReducer