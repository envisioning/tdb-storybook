import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import app from '../reducers';
import asteroid from '../asteroid';


const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|meteor/.test(action.type)
});

const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)


export default store;
