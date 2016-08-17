export const MAKE_SEARCH = 'search/MAKE_SEARCH';
export const SET_FILTER = 'search/SET_FILTER';
export const SET_SORT = 'search/SET_SORT';
export const INSERT_RESULT = 'search/INSERT_RESULT';
export const SET_METADATA = 'search/SET_METADATA';
export const SET_SEARCH_TEXT = 'search/SET_SEARCH_TEXT';
export const SET_START = 'search/SET_START';
export const SET_SIZE = 'search/SET_SIZE';
export const INCREASE_SIZE = 'search/INCREASE_SIZE';
export const SET_TEXT = 'search/SET_TEXT';
export const SET_RESULTS = 'search/SET_RESULTS';
export const CONCAT_RESULTS = 'search/CONCAT_RESULTS';
export const TOGGLE_ADVANCED_SEARCH = 'search/TOGGLE_ADVANCED_SEARCH'
export const INCREASE_FROM = 'search/INCREASE_FROM';
export const SET_LOADING = 'search/SET_LOADING'
import { Map } from 'immutable'
import { insertDoc } from './'
import { filterFormToEs, sortFormToEs } from '../utils/form_to_es'

export const makeSearch = (searchId, shouldConcatResults = false) => {
  return (dispatch, getState) => {
    const state = getState();
    const text = state.search.getIn([searchId, 'text'] , '');
    const sort = sortFormToEs(state.search.getIn([searchId, 'sort']).toObject())
    const filter = filterFormToEs(state.search.getIn([searchId, 'filter']).toObject(), {
      status: 'terms',
      tags: 'terms',
      readinessNumber: 'range'
    })
    const size = state.search.getIn([searchId, 'size'])
    const from = state.search.getIn([searchId, 'from'])
    const searchObject = {
      text,
      sort,
      filter,
      size,
      from
    }
    dispatch(setLoading(true, searchId));

    asteroid.call('search', searchObject)
    .then(data => {
      const results = data.results;
      dispatch(setLoading(false, searchId));
      console.log('received from server: ', results)
      const transformedResults = results.map(result => {
        const { _type, _id, _score, ...doc} = result
        delete doc._highlight;
        dispatch(insertDoc({
          doc: doc,
          id: _id,
          collection: _type
        }))

        return {
          score: _score,
          id: _id,
          collection: _type
        }
      })

      if (shouldConcatResults) {
        dispatch(concatResults(transformedResults, searchId))
      } else {
        dispatch(setResults(transformedResults, searchId))
      }

      dispatch(setMetadata({
        took: data.took,
        total: data.total
      }, searchId))
    })
    .catch(err => {
      console.log('err!')
      console.log(err)
    })
  }
}

export const setLoading = (loading, searchId) => {
  return {
    type: SET_LOADING,
    payload: {
      loading,
      searchId
    }
  }
}


export const setFilter = (filter, searchId) => {
  return {
    type: SET_FILTER,
    payload: {
      filter,
      searchId
    }
  }
}

export const setSort = (sort, searchId) => {
  return {
    type: SET_SORT,
    payload: {
      sort,
      searchId
    }
  }
}

export const setSearchText = (text, searchId) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: {
      text,
      searchId
    }
  }
}
export const insertResult = (id, result, searchId) => {
  return {
    type: INSERT_RESULT,
    payload: {
      id,
      result,
      searchId
    }
  }
}

export const setResults = (results, searchId) => {
  return {
    type: SET_RESULTS,
    payload: {
      results,
      searchId
    }
  }
}


export const setMetadata = (metadata, searchId) => ({
  type: SET_METADATA,
  payload: {
    metadata,
    searchId
  }
})

export const setStart = (start, searchId) => ({
  type: SET_START,
  payload: {
    start,
    searchId
  }
})

export const setSize = (size, searchId) => ({
  type: SET_SIZE,
  payload: {
    size,
    searchId
  }
})

export const concatResults = (results, searchId) => ({
  type: CONCAT_RESULTS,
  payload: {
    results,
    searchId
  }
})

export const increaseSize = (increment, searchId) => ({
  type: INCREASE_SIZE,
  payload: {
    increment,
    searchId
  }
})

export const increaseFrom = (increment, searchId) => ({
  type: INCREASE_FROM,
  payload: {
    increment,
    searchId
  }
})
export const toggleAdvancedSearch = (searchId) => ({
  type: TOGGLE_ADVANCED_SEARCH,
  payload: {
    searchId
  }
})
