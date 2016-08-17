import {
  MAKE_SEARCH,
  SET_FILTER,
  SET_SORT,
  SET_RESULTS,
  INSERT_RESULT,
  SET_METADATA,
  SET_SEARCH_TEXT,
  SET_START,
  SET_SIZE,
  TOGGLE_ADVANCED_SEARCH,
  INCREASE_SIZE,
  CONCAT_RESULTS,
  INCREASE_FROM,
  SET_LOADING
} from '../../actions/search'
import Immutable, { Map, List } from 'immutable'

const searchShape = {
  filter: Map(),
  sort: Map(),
  results: List(),
  metadata: Map(), //total, took
  showing: 0,
  text: '',
  from: 0,
  size: 10,
  showAdvancedSearch: false,
  loading: false
}
const initialState = Map({
  technologiesDashboardSearch: Map(searchShape),
  organizationsDashboardSearch: Map(searchShape),
  projectsDashboardSearch: Map(searchShape),
  attachmentsDashboardSearch: Map(searchShape)
})

/*

*/

export default (state = initialState, { type, payload = {} }) => {

  const searchId = payload.searchId

  switch (type) {
    case MAKE_SEARCH:
      //thunk
    case SET_FILTER:
      return state.setIn([searchId, 'filter'], Map(payload.filter)).setIn([searchId, 'from'], 0)
    case SET_SORT:
      return state.setIn([searchId, 'sort'], Map(payload.sort)).setIn([searchId, 'from'], 0)
    case INSERT_RESULT:
      return state.setIn([searchId, 'results', payload.id], Map(payload.result))
    case SET_METADATA:
      return state.setIn([searchId, 'metadata'], Map(payload.metadata))
    case SET_SEARCH_TEXT:
      return state.setIn([searchId, 'text'], payload.text).setIn([searchId, 'from'], 0)
    case SET_START:
      return state.setIn([searchId, 'start'], payload.start)
    case SET_SIZE:
      return state.setIn([searchId, 'size'], payload.size)
    case INCREASE_SIZE:
      return state.setIn([searchId, 'size'], state.getIn([searchId, 'size']) + payload.increment)
    case INCREASE_FROM:
      return state.setIn([searchId, 'from'], state.getIn([searchId, 'from']) + payload.increment)
    case SET_RESULTS:
      return state.setIn([searchId, 'results'], Immutable.fromJS(payload.results))
    case CONCAT_RESULTS:
      return state.setIn([searchId, 'results'], state.getIn([searchId, 'results']).concat(Immutable.fromJS(payload.results)))
    case TOGGLE_ADVANCED_SEARCH:
      return state.setIn([searchId, 'showAdvancedSearch'], !state.getIn([searchId, 'showAdvancedSearch']))
    case SET_LOADING:
      return state.setIn([searchId, 'loading'], payload.loading)
    default:
      return state
  }
}
