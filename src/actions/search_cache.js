export const INSERT = 'searchCache/INSERT';
export const REMOVE = 'searchCache/REMOVE';
export const UPDATE = 'searchCache/UPDATE';
export const BULK_INSERT = 'searchCache/BULK_INSERT';

export const bulkInsert = (docs, collection) => {
  return {
    type: BULK_INSERT,
    payload: {
      docs,
      collection
    }
  }
}


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
