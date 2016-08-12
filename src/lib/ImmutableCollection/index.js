

import { Map } from 'immutable';
export default class ImmutableCollection {
  constructor(collection, asteroid, store) {
    this.collection = collection;
    this.asteroid = asteroid;
    this.store = store;
    this._setupReducer();

  }


  setDispatchFunction(dispatch) {
    this.dispatch = dispatch;
    this._setupDdpListeners();
  }
  _setupDdpListeners() {
    this.asteroid.ddp.on('added', ({collection, id, fields}) => {
      if (collection === this.collection) {
        this.dispatch(this._insertDoc({...fields, id}))
      }
    });

    this.asteroid.ddp.on('removed', ({collection, id}) => {
      if (collection === this.collection) {
        this.dispatch(this._removeDoc(id))
      }
    });

    this.asteroid.ddp.on('changed', ({collection, id, fields}) => {
      if (collection === this.collection) {
        this.dispatch(this._updateDoc(id, fields));
      }
    });
  }


  _insertDoc(doc) {
    return {
      type: INSERT,
      payload: {
        collection: this.collection,
        doc
      }
    }
  }


  _removeDoc(id) {
    return {
      type: REMOVE,
      payload: {
        collection: this.collection,
        id
      }
    }
  }

  _updateDoc(id, fields) {
    return {
      type: UPDATE,
      payload: {
        collection: this.collection,
        id,
        fields
      }
    }
  }


  _setupReducer() {
    this.reducer = (state = Map(), action) => {

      if ((action.payload && action.payload.collection) !== this.collection || !action.payload) {
        return state
      }
      switch (action.type) {
        case INSERT:
          const id = action.payload.doc.id;
          return state.set(id, Map(action.payload.doc));
        break;
        case REMOVE:
          return state.delete(action.payload.id)
        break;
        case UPDATE:
          return state.update(action.payload.id, doc => doc.merge(action.payload.fields))
        break;
        default:
          return state;
      }
      return state
    }
  }

  getReducer() {
    return this.reducer
  }
}

const collections = {
  counts: Map(),
  roles: Map(),
  users: Map()
}
export const reducer = (state = Map(collections), { type, payload = {}}) => {
  const {id, collection, doc, fields} = payload;

  switch (type) {
    case INSERT:
      return state.setIn([collection, id], Map(doc));
    break;
    case REMOVE:
      return state.deleteIn([collection, id])
    break;
    case UPDATE:
      return state.updateIn([collection, id], doc => doc.merge(fields))
    break;
    default:
      return state;
  }
}




const clientConnected = () => {
  return {
    type: CONNECT,
    payload: {}
  }
}
export const ddpListener = (client, dispatch) => {

}
