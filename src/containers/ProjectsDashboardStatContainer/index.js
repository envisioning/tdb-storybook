import { connect } from 'react-redux'
import ProjectsDashboardStat from '../../components/ProjectsDashboardStat'
import subscriptionHOC from '../../components/subscriptionHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'projects-total', 'count'], 0),
    active: state.client.collections.getIn(['counts', 'projects-open', 'count'], 0),
    prospecting: state.client.collections.getIn(['counts', 'projects-prospect', 'count'], 0),
    closed: state.client.collections.getIn(['counts', 'projects-closed', 'count'], 0),
    newest: 'some project',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const subscriber = (ddp) => {
  return ddp.subscribe('projects-status-counter')
}
const ProjectsDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(subscriptionHOC(subscriber, ProjectsDashboardStat))

export default ProjectsDashboardStatContainer
