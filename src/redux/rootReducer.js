import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import accountReducer from './reducers/accountReducer'
import checkoutReducer from './reducers/checkoutReducer'
import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  checkout: checkoutReducer,
  products: productsReducer
})

export default rootReducer