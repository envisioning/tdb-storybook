import { INSERT, REMOVE, UPDATE } from '../../../actions'
import { Map } from 'immutable'
const initialState = Map({
  counts: Map(),
  roles: Map(),
  users: Map(),
  projects: Map(),
  technologies: Map(),
  organizations: Map(),
  attachments: Map()
});

const collections = (state = initialState, { type, payload = {}}) => {
  const {id, collection, doc, fields} = payload;

  switch (type) {
    case INSERT:
      return state.setIn([collection, id], Map(doc));
    break;
    case REMOVE:
      return state.deleteIn([collection, id])
    break;
    case UPDATE:
      return state.updateIn([collection, id], doc => doc.merge(fields))
    break;
    default:
      return state;
  }
}

export default collections
