import { Map } from 'immutable'
import { SET_HANDLER_READY, REGISTER_HANDLER, UNREGISTER_HANDLER, INCREASE_HANDLER_COUNTER, DECREASE_HANDLER_COUNTER } from '../../../actions/handlers'
import asteroid from '../../../asteroid'

const initialState = Map()

const subscriptions = (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case REGISTER_HANDLER:

      return state.set(payload.handler.id, Map({
        handler: payload.handler,
        counter: 1,
        isReady: false,
        error: false
      }))
    break;
    case UNREGISTER_HANDLER:
      asteroid.unsubscribe(payload.handlerId)
      return state.delete(payload.handlerId);
    break;
    case DECREASE_HANDLER_COUNTER:
      return state.update(payload.handlerId, handler => handler.set('counter', handler.get('counter') - 1))
    break;
    case INCREASE_HANDLER_COUNTER:
      return state.update(payload.handlerId, handler => handler.set('counter', handler.get('counter') + 1))
    break;
    case SET_HANDLER_READY:
      const handlerId = payload.handlerId;
      return state.setIn([handlerId, 'isReady'], true)
    break;
    default:
      return state

  }
}

export default subscriptions
