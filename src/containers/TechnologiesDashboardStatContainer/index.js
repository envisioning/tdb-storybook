import { connect } from 'react-redux'
import TechnologiesDashboardStat from '../../components/TechnologiesDashboardStat'

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'technologies-total', 'count'], 0),
    published: state.client.collections.getIn(['counts', 'technologies-published', 'count'], 0),
    reviewed: state.client.collections.getIn(['counts', 'technologies-review', 'count'], 0),
    drafts: state.client.collections.getIn(['counts', 'technologies-draft', 'count'], 0),
    newest: 'TechnologiesDashboardStatContainer ',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const TechnologiesDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TechnologiesDashboardStat)

export default TechnologiesDashboardStatContainer
