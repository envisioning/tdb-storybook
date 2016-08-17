import React,  { PropTypes } from 'react';
import { connect } from 'react-redux'
import SearchLayout from '../../components/SearchLayout'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';
import { makeSearch, setFilter, setSearchText, setSort, setResults, setMetadata, setStart, setSize, toggleAdvancedSearch, increaseFrom } from '../../actions/search'
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'

const mapStateToProps = (state, ownProps) => {
  const { searchId } = ownProps
  const stateSubset = state.search.get(searchId);

  // const results = stateSubset.get('results').sort((a, b) => {
  //   return -a.get('score') + b.get('score')
  // }).map(result => {
  //   const collection = result.get('collection')
  //   const doc = state.client.collections.getIn([collection, result.get('id')])
  //   return doc.merge({
  //     _score: result.get('score'),
  //     _type: result.get('collection'),
  //     image: getCardUrl(getCloudinaryPath(doc.get('image'))),
  //     logo: getCardUrl(getCloudinaryPath(doc.get('logo')))
  //   })
  // })
  const results = stateSubset.get('results').map(result => {
    const collection = result.get('collection')
    const doc = state.client.collections.getIn([collection, result.get('id')])
    return doc.merge({
      _score: result.get('score'),
      _type: result.get('collection'),
      image: getCardUrl(getCloudinaryPath(doc.get('image'))),
      logo: getCardUrl(getCloudinaryPath(doc.get('logo')))
    })
  })

  return {
    filter: stateSubset.get('filter'),
    sort: stateSubset.get('sort'),
    results: results,
    metadata: stateSubset.get('metadata'),
    searchText: stateSubset.get('searchText'),
    start: stateSubset.get('start'),
    size: stateSubset.get('size'),
    showAdvancedSearch: stateSubset.get('showAdvancedSearch'),
    loading: stateSubset.get('loading'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { searchId } = ownProps
  return {
    onChangeSearchText(text) {
      dispatch(setSearchText(text, searchId))
      dispatch(makeSearch(searchId));
    },
    onChangeFilter(filter) {
      dispatch(setFilter(filter, searchId))
      dispatch(makeSearch(searchId));
    },
    onChangeSort(sort) {
      console.log(sort)
      dispatch(setSort(sort, searchId))
      dispatch(makeSearch(searchId));
    },
    onToggleAdvancedSearch() {
      dispatch(toggleAdvancedSearch(searchId))
    },

    onLoadMore() {
      console.log('should load more!');
      dispatch(increaseFrom(10, searchId))
      dispatch(makeSearch(searchId, true))
    },
    onComponentDidMount() {
      dispatch(makeSearch(searchId))
    }
  }
}


export default componentRegisterEnchancer(connect(
  mapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(SearchLayout)))
