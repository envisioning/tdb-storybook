export const INSERT = 'meteor/INSERT';
export const REMOVE = 'meteor/REMOVE';
export const UPDATE = 'meteor/UPDATE';
export const SET_CONNECTION_STATE = 'meteor/SET_CONNECTION_STATE';
export const SUBSCRIBE = 'meteor/SUBSCRIBE';
export const REGISTER_DDP_CLIENT = 'meteor/REGISTER_DDP_CLIENT';

export const REGISTER_SUB = 'meteor/REGISTER_SUB'
export const SUBS_READY = 'meteor/SUBS_READY'
export const STOP_SUB = 'meteor/STOP_SUB'

import asteroid from '../asteroid'


export const insertDoc = ({doc, id, collection}) => {
  return {
    type: INSERT,
    payload: {
      id,
      collection,
      doc
    }
  }
}


export const removeDoc = ({id, collection}) => {
  return {
    type: REMOVE,
    payload: {
      collection,
      id
    }
  }
}

export const updateDoc = ({id, collection, fields}) => {
  return {
    type: UPDATE,
    payload: {
      collection,
      id,
      fields
    }
  }
}
export const setConnectionState = (connected) => {
  return {
    type: SET_CONNECTION_STATE,
    payload: {
      connected
    }
  }
}
export const registerDdpClient = (client) => {
  return {
    type: REGISTER_DDP_CLIENT,
    payload: {
      client
    }
  }
}


export const unsubscribe = ({componentID, subId}) => {
  return {
    type: STOP_SUB,
    payload: {
      componentID,
      subId
    }
  }
}

export const subscribe = ({ componentID, subId, pubName, params}) => {
  return dispatch => {
    console.log(componentID);
    let handler
    if (params) {
      handler = asteroid.subscribe(pubName, params);
    } else {
      handler = asteroid.subscribe(pubName)
    }

    console.log('handler', handler);
    handler.on('ready', () => {
      console.log(componentID);
      dispatch(subsReady({componentID, subId, handler}))
    })
    dispatch(registerSub({componentID, subId, handler}))
  }
}

export const setupDdpClient = (asteroid) => {
  return dispatch => {
    asteroid.ddp.on('added', ({collection, id, fields}) => {
      dispatch(insertDoc({
        doc: {...fields, id},
        id,
        collection,
      }))
    });

    asteroid.ddp.on('removed', ({collection, id}) => {
      dispatch(removeDoc({
        collection,
        id
      }))
    });

    asteroid.ddp.on('changed', ({collection, id, fields}) => {
      dispatch(updateDoc({
        id,
        collection,
        fields
      }));
    });

    asteroid.ddp.on('connected', (e) => {
      dispatch(setConnectionState(true));
    })

    dispatch(registerDdpClient(asteroid));
  }
}
