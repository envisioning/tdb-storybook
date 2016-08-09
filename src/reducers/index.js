import { combineReducers } from 'redux';
import collections from './collections'
import login from './login'
import {reducer as form} from 'redux-form';
import { telefone, celular, cpf } from '../utils/patterns'

const app = combineReducers({
  login,
});

export default app
