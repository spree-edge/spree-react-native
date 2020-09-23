import { combineReducers } from 'redux'
import authReducer from './reducers'

const rootReducer = combineReducers({
  authentication: authReducer,
})

export default rootReducer
