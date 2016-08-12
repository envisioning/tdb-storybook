export const REGISTER_COMPONENT_SUBSCRIPTION = 'meteor/REGISTER_COMPONENT_SUBSCRIPTION';
export const UNREGISTER_COMPONENT = 'meteor/UNREGISTER_COMPONENT'
export const REGISTER_COMPONENT = 'meteor/REGISTER_COMPONENT'
export const REMOVE_COMPONENT = 'meteor/REMOVE_COMPONENT';
export const REMOVE_SUBSCRIPTION = 'meteor/REMOVE_SUBSCRIPTION';

import { unregisterHandler, decreaseHandlerCounter } from './handlers'

export const unregisterComponent = (componentId) => {
  return (dispatch, getState) => {
    const state = getState()

    const component = state.client.subscriptions.get(componentId);
    component.forEach(handlerId => {
      if (state.client.handlers.getIn([handlerId, 'counter']) === 1) {
        dispatch(unregisterHandler(handlerId))
      } else {
        dispatch (decreaseHandlerCounter(handlerId))
      }
    })

    dispatch(removeComponent(componentId))
  }
}

export const removeSubscription = (componentId, name) => {
  return {
    type: REMOVE_SUBSCRIPTION,
    payload: {
      componentId,
      name
    }
  }
}

export const removeComponent = (componentId) => {
  return {
    type: REMOVE_COMPONENT,
    payload: {
      componentId
    }
  }
}
export const registerComponent = ({componentId}) => {
  return {
    type: REGISTER_COMPONENT,
    payload: {
      componentId
    }
  }
}

export const registerComponentSubscription = (componentId, handlerId, subName) => {
  return {
    type: REGISTER_COMPONENT_SUBSCRIPTION,
    payload: {
      componentId,
      handlerId,
      subName
    }
  }
}
