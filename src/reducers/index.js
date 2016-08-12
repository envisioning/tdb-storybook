import { combineReducers } from 'redux';
import collections from './collections'
import login from './login'
import {reducer as form} from 'redux-form';
import { telefone, celular, cpf } from '../utils/patterns'
import { reducer as collectionReducer} from '../lib/ImmutableCollection'

const app = combineReducers({
  login,
  collections: collectionReducer
});



export default app
