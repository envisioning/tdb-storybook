import { REGISTER_COMPONENT_SUBSCRIPTION, REMOVE_SUBSCRIPTION, REGISTER_COMPONENT, UNREGISTER_COMPONENT, REMOVE_COMPONENT } from '../../../actions/subscriptions';
import { Map } from 'immutable'

const initialState = Map();

const subscriptions = (state = initialState, { type, payload = {}}) => {
  switch (type) {
    case REGISTER_COMPONENT_SUBSCRIPTION:
      const { componentId, handlerId, subName }  = payload
      return state.setIn([componentId, subName], handlerId)
    break;
    case REMOVE_SUBSCRIPTION:
      return state.deleteIn([payload.componentId, payload.name])
    break;
    case REMOVE_COMPONENT:
      return state.delete(payload.componentId);
    break;
    case REGISTER_COMPONENT:
      return state.set(payload.componentId, Map())
    break;
    default:
      return state
  }
}

export default subscriptions


// import { Map } from 'immutable'
// import { REGISTER_SUB, SUBS_READY, STOP_SUB, REGISTER_COMPONENT, UNREGISTER_COMPONENT } from '../../../actions'
// import asteroid from '../../../asteroid'
//
// const initialState = Map()
//
// const subscriptions = (state = initialState, { type, payload = {}}) => {
//   switch (type) {
//     case REGISTER_COMPONENT:
//       return state.set(payload.componentId, Map())
//     break;
//     case REGISTER_SUB:
//     // state.get(payload.componentId).forEach(sub => {
//     //   console.log('iterating on handler: ', sub.get('handler').id)
//     //   if (sub.get('handler').id === handlerId) {
//     //     newState = newState.setIn([payload.componentId, payload.subId, 'isReady'], true)
//     //   }
//     // })
//       return state.setIn([payload.componentId, payload.subId], Map({
//         handler: payload.handler,
//         isReady: false
//       }))
//     break;
//     case UNREGISTER_COMPONENT:
//       //stop all subscriptions
//       const subs = state.get(payload.componentId);
//
//       subs.forEach(sub => {
//         const { handler } = sub
//         sub.stop();
//       })
//       return state.deleteIn([payload.componentId])
//     break;
//     case SUBS_READY:
//       // const handlerId = payload.handler.id;
//       // let newState = state;
//       // console.log("SUBS READY______ handlerId", handlerId)
//       // state.get(payload.componentId).forEach(sub => {
//       //   console.log('iterating on handler: ', sub.get('handler').id)
//       //   if (sub.get('handler').id === handlerId) {
//       //     newState = newState.setIn([payload.componentId, payload.subId, 'isReady'], true)
//       //   }
//       // })
//       //
//       // return newState;
//       return state.setIn([payload.componentId, payload.subId, 'isReady'], true)
//     break;
//     case STOP_SUB:
//       const handler = state.getIn([payload.componentId, payload.subId, 'handler']);
//       asteroid.unsubscribe(handler.id)
//       return state.deleteIn([payload.componentId, payload.subId])
//     break;
//     default:
//       return state
//
//   }
// }
//
// export default subscriptions
