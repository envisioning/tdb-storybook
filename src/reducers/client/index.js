import { combineReducers } from 'redux';
import collections from './collections'
import connection from './connection'
import subscriptions from './subscriptions'
import handlers from './handlers'

const client = combineReducers({
  collections,
  connection,
  subscriptions,
  handlers
});



export default client
