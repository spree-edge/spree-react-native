import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import rootReducer from './rootReducer'

const composeStoreWithMiddleware = applyMiddleware(
  promise,
  thunk, 
  logger
)


const store = createStore(rootReducer, composeStoreWithMiddleware)

export default store



// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';

// import rootReducer from './rootReducer';

// // let logger = [];

// // if (process.env.NODE_ENV === 'development') {
// //   logger.push(createLogger());
// // }

// const middleware = applyMiddleware(promise(), thunk, ...logger);

// const store = createStore(rootReducer, middleware);
// export default store;
