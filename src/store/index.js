import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import app from '../reducers';
import asteroid from '../asteroid';
import { ddpListener } from '../lib/ImmutableCollection'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form/.test(action.type)
});

const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)


ddpListener(asteroid, store.dispatch);


export default store;
