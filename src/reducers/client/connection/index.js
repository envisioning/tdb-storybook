import { Map } from 'immutable'
import { SET_CONNECTION_STATE, SET_DDP_CLIENT } from '../../../actions'

const initialState = Map({
  connected: false,
});

const connection = (state = initialState, action) => {

  switch (action.type) {
    case SET_CONNECTION_STATE:
      const { connected } = action.payload
      return state.set('connected', connected);
    break;
    case SET_DDP_CLIENT:
      const { client } = action.payload
      return state.set('ddp', client)
    break;
    default:
      return state
  }
}

export default connection
