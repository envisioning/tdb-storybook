import { connect } from 'react-redux'
import OrganizationsDashboardStat from '../../components/OrganizationsDashboardStat'
import subscriptionHOC from '../../components/subscriptionHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'organizations-total', 'count'], 0),
    newest: 'some organization',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const subscriber = (ddp) => {
  return ddp.subscribe('organizations-counter')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(subscriptionHOC(subscriber, OrganizationsDashboardStat))
