import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import authReducer from './reducers'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store