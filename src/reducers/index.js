import { combineReducers } from 'redux';
import login from './login'
import client from './client'
import search from './search'
import mainDashboard from './main_dashboard';

const app = combineReducers({
  login,
  client,
  mainDashboard,
  search
});



export default app
