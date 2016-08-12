import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import app from '../reducers';
import asteroid from '../asteroid';
import Immutable from 'immutable';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => !/redux-form|meteor/.test(action.type),
  stateTransformer: (state) => {
    let newState = {};

    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
  }
});

const store = createStore(
  app,
  compose (
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


export default store;
