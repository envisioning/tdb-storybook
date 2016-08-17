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
import { bulkInsert } from './search_cache';
import _ from 'lodash';

export const makeSearch = (searchId, shouldConcatResults = false, types = []) => {
  return (dispatch, getState) => {
    const state = getState();
    const text = state.search.getIn([searchId, 'searchText'] , '');
    const sort = sortFormToEs(state.search.getIn([searchId, 'sort']).toObject())
    const filter = filterFormToEs(state.search.getIn([searchId, 'filter']).toObject(), {
      status: 'terms',
      tags: 'terms',
      readinessNumber: 'range',
      type: 'terms',
    })
    const size = state.search.getIn([searchId, 'size'])
    const from = state.search.getIn([searchId, 'from'])
    const searchObject = {
      text,
      sort,
      filter,
      size,
      from,
      types
    }
    // We will begin the search, set Loading to TRUE
    dispatch(setLoading(true, searchId));
    // Call the async method and get a promise
    asteroid.call('search', searchObject)
    .then(data => {
      // when the promise is resolved, set Loading to FALSE
      dispatch(setLoading(false, searchId));
      // when the data arrives, extract the relevant parts
      const docs = data.results;
      console.log(docs)
      const metadata = {
        took: data.took,
        total: data.total
      }

      // lets build our results list based on the response
      // we just need the _score, the _id and the _type
      const results = docs.map(({ _type, _id, _score }) => ({
        _score,
        _id,
        _type
      }))

      //  we need to cache the docs received, first let's group them by _type
      //  searchCache reducer will take care of trasforming this deep object into immutable Maps
      const docsGroupedByTypes = _.groupBy(docs, '_type');
      dispatch(bulkInsert(docsGroupedByTypes))


      if (shouldConcatResults) {
        // If this search was a 'load more search', then we should not discard oldest results, instead, we will concat them
        dispatch(concatResults(results, searchId))
      } else {
        // but if it is a new search (text, filters, sort has changed) we will discard older results
        dispatch(setResults(results, searchId))
      }

      // set metadata
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
