export const SET_HANDLER_READY = 'meteor/SET_HANDLER_READY';
export const REGISTER_HANDLER = 'meteor/REGISTER_HANDLER';
export const UNREGISTER_HANDLER = 'meteor/UNREGISTER_HANDLER'
export const INCREASE_HANDLER_COUNTER = 'meteor/INCREASE_HANDLER_COUNTER'
export const DECREASE_HANDLER_COUNTER = 'meteor/DECREASE_HANDLER_COUNTER'


export const setHandlerReady = (handlerId) => {
  return {
    type: SET_HANDLER_READY,
    payload: {
      handlerId
    }
  }
}

export const registerHandler = (handler) => {
  return {
    type: REGISTER_HANDLER,
    payload: {
      handler,
    }
  }
}

export const increaseHandlerCounter = (handlerId) => {
  return {
    type: INCREASE_HANDLER_COUNTER,
    payload: {
      handlerId
    }
  }
}

export const unregisterHandler = (handlerId) => {
  return {
    type: UNREGISTER_HANDLER,
    payload: {
      handlerId
    }
  }
}

export const decreaseHandlerCounter = (handlerId) => {
  return {
    type: DECREASE_HANDLER_COUNTER,
    payload: {
      handlerId
    }
  }
}

export const setupHandler = (handler, componentId) => {
  return (dispatch, getState) => {
    const state = getState();
    const existingHandler = state.client.handlers.get(handler.id, false);

    if (!existingHandler) {
      dispatch(registerHandler(handler));
      
      handler.on('ready', () => {
        dispatch(setHandlerReady(handler.id))
      })
    } else {
      const hostComponent = state.client.subscriptions.get(componentId)
      const alreadyRegistered = hostComponent.find(handlerId => handlerId === handler.id)
      if (!alreadyRegistered) {
        dispatch(increaseHandlerCounter(handler.id))
      }
    }
  }
}
