import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import accountReducer from './reducers/accountReducer'
import checkoutReducer from './reducers/checkoutReducer'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  checkout: checkoutReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default rootReducer