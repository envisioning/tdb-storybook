import { combineReducers } from 'redux';
import login from './login'
import client from './client'

const app = combineReducers({
  login,
  client,
});



export default app
