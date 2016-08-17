import { INSERT, REMOVE, UPDATE, BULK_INSERT } from '../../actions/search_cache'
import { Map } from 'immutable'
const initialState = Map({
  attachments: Map()
});

const searchCache = (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case BULK_INSERT:
      const { docs } = payload;
      const types = Object.keys(docs);
      return state.withMutations(map =>
        types.reduce((previousMap, currentValue) =>
          previousMap.mergeIn([currentValue], Map(docs[currentValue].map(doc => [doc._id, Map(doc)])))
        , map)
      )
    break;
    default:
      return state;
  }
}

export default searchCache
