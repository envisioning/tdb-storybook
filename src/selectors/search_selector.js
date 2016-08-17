import { createSelector } from 'reselect'
import { getCloudinaryPath, getCardUrl } from '../utils/cloudinary_url'

const getSearchResults = (state, props) => {
  return state.search.getIn([props.searchId, 'results'])
}


const getSearchDocs = (state, props) =>
  state.searchCache


const makeGetDisplayedDocs = () => {
  return createSelector(
    [ getSearchResults, getSearchDocs ],
    (results, docs) => {
      return results.map(result => {
        const _type = result.get('_type')
        const _id = result.get('_id')
        const _score = result.get('_score')
        const doc = docs.getIn([_type, _id])
        return doc.merge({
          _score,
          _type,
          image: getCardUrl(getCloudinaryPath(doc.get('image'))),
          logo: getCardUrl(getCloudinaryPath(doc.get('logo')))
        })
      })
    }
  )
}

export default makeGetDisplayedDocs
