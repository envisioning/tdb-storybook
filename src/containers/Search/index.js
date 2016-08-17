import React,  { PropTypes } from 'react';
import { connect } from 'react-redux'
import SearchLayout from '../../components/SearchLayout'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';
import { makeSearch, setFilter, setSearchText, setSort, setResults, setMetadata, setStart, setSize, toggleAdvancedSearch, increaseFrom } from '../../actions/search'
import { getCardUrl, getCloudinaryPath } from '../../utils/cloudinary_url'
import makeGetDisplayedDocs from '../../selectors/search_selector'

const makeMapStateToProps = () => {
  const getDisplayedDocs = makeGetDisplayedDocs()
  const mapStateToProps = (state, props) => {
    const { searchId } = props
    const stateSubset = state.search.get(searchId);

    return {
      results: getDisplayedDocs(state, props),
      filter: stateSubset.get('filter'),
      sort: stateSubset.get('sort'),
      metadata: stateSubset.get('metadata'),
      searchText: stateSubset.get('searchText'),
      start: stateSubset.get('start'),
      size: stateSubset.get('size'),
      showAdvancedSearch: stateSubset.get('showAdvancedSearch'),
      loading: stateSubset.get('loading'),
    }
  }
  return mapStateToProps
}


// const mapStateToProps = (state, ownProps) => {
//   const { searchId } = ownProps
//   const stateSubset = state.search.get(searchId);

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
  // const results = stateSubset.get('results').map(result => {
  //   const collection = result.get('collection')
  //   const doc = state.client.collections.getIn([collection, result.get('id')])
  //   if (!doc){
  //     return {}
  //   }
  //   return doc.merge({
  //     _score: result.get('score'),
  //     _type: result.get('collection'),
  //     image: getCardUrl(getCloudinaryPath(doc.get('image'))),
  //     logo: getCardUrl(getCloudinaryPath(doc.get('logo')))
  //   })
  // })

//   return {
//     filter: stateSubset.get('filter'),
//     sort: stateSubset.get('sort'),
//     results: results,
//     metadata: stateSubset.get('metadata'),
//     searchText: stateSubset.get('searchText'),
//     start: stateSubset.get('start'),
//     size: stateSubset.get('size'),
//     showAdvancedSearch: stateSubset.get('showAdvancedSearch'),
//     loading: stateSubset.get('loading'),
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  const { searchId, types } = ownProps
  return {
    onChangeSearchText(text) {
      dispatch(setSearchText(text, searchId))
      dispatch(makeSearch(searchId, false, types));
    },
    onChangeFilter(filter) {
      dispatch(setFilter(filter, searchId))
      dispatch(makeSearch(searchId, false, types));
    },
    onChangeSort(sort) {
      console.log(sort)
      dispatch(setSort(sort, searchId))
      dispatch(makeSearch(searchId, false, types));
    },
    onToggleAdvancedSearch() {
      dispatch(toggleAdvancedSearch(searchId))
    },

    onLoadMore() {
      console.log('should load more!');
      dispatch(increaseFrom(10, searchId))
      dispatch(makeSearch(searchId, true, types))
    },
    onComponentDidMount() {
      if (this.props.results.size === 0) {
        dispatch(makeSearch(searchId, false, types))
      }
    }
  }
}


export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(SearchLayout))
