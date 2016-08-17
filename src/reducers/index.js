import { combineReducers } from 'redux';
import login from './login'
import client from './client'
import search from './search'
import mainDashboard from './main_dashboard';
import searchCache from './search_cache';

const app = combineReducers({
  login,
  client,
  mainDashboard,
  search,
  searchCache
});



export default app
