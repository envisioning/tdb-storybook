import { combineReducers } from 'redux';
import login from './login'
import client from './client'
import mainDashboard from './main_dashboard';

const app = combineReducers({
  login,
  client,
  mainDashboard
});



export default app
