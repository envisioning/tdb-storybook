import { Map } from 'immutable'
import { SUBSCRIBE } from '../../../actions'

const initialState = Map()

const subscriptions = (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case SUBSCRIBE:
      const { id, subscription } = action.payload;
      return state.set(id, subscription);
    break;
    default:
      return state

  }
}

export default subscriptions
