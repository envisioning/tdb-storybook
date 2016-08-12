import { connect } from 'react-redux'
import OrganizationsDashboardStat from '../../components/OrganizationsDashboardStat'

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'organizations-total', 'count'], 0),
    newest: 'some attachment',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const OrganizationsDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationsDashboardStat)

export default OrganizationsDashboardStatContainer
