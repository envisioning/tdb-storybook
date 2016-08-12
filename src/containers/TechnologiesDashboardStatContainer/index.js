import { connect } from 'react-redux'
import TechnologiesDashboardStat from '../../components/TechnologiesDashboardStat'
import subscriptionHOC from '../../components/subscriptionHOC';

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

const subscriber = (ddp) => {
  return ddp.subscribe('technologies-status-counter')
}

const TechnologiesDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(subscriptionHOC(subscriber, TechnologiesDashboardStat))

export default TechnologiesDashboardStatContainer
