import { combineReducers } from 'redux';
import collections from './collections'
import connection from './connection'
import subscriptions from './subscriptions'

const client = combineReducers({
  collections,
  connection,
  subscriptions
});



export default client
