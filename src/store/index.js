import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import app from '../reducers';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|immutable-collection/.test(action.type)
});

const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)


export default store;
