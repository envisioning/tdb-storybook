export const INSERT = 'meteor/INSERT';
export const REMOVE = 'meteor/REMOVE';
export const UPDATE = 'meteor/UPDATE';
export const SET_CONNECTION_STATE = 'meteor/SET_CONNECTION_STATE';
export const SUBSCRIBE = 'meteor/SUBSCRIBE';
export const SET_DDP_CLIENT = 'meteor/SET_DDP_CLIENT';

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
export const setDdpClient = (client) => {
  return {
    type: SET_DDP_CLIENT,
    payload: {
      client
    }
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

    dispatch(setDdpClient(asteroid));
  }
}
