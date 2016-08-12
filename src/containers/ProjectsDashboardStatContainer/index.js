import { connect } from 'react-redux'
import ProjectsDashboardStat from '../../components/ProjectsDashboardStat'

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.collections.getIn(['counts', 'projects-total', 'count'], 0),
    active: state.collections.getIn(['counts', 'projects-open', 'count'], 0),
    prospecting: state.collections.getIn(['counts', 'projects-prospect', 'count'], 0),
    closed: state.collections.getIn(['counts', 'projects-closed', 'count'], 0),
    newest: 'some project',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const ProjectsDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsDashboardStat)

export default ProjectsDashboardStatContainer
