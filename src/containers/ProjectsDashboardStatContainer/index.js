import React,  { PropTypes } from 'react';
import { connect } from 'react-redux'
import ProjectsDashboardStat from '../../components/ProjectsDashboardStat'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';

const mapStateToProps = (state, ownProps) => {
  const { isSubsReady } = ownProps

  const projects = state.client.collections.get('projects')
  const newest = projects.size && projects
    .sort((p1, p2) => p2.get('createdAt') - p1.get('createdAt'))
    .first()
    .get('name') || ''


  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'projects-total', 'count'], 0),
    active: state.client.collections.getIn(['counts', 'projects-open', 'count'], 0),
    prospecting: state.client.collections.getIn(['counts', 'projects-prospect', 'count'], 0),
    closed: state.client.collections.getIn(['counts', 'projects-closed', 'count'], 0),
    newestLink: '#',
    loading: !isSubsReady('projects-status-counter') || !isSubsReady('last-project-added'),
    newest,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { subscribe, unsubscribe } = ownProps
  return {
    onComponentDidMount() {
      subscribe({
        name: 'projects-status-counter',
        publication: 'projects-status-counter',
        params: null
      });
      subscribe({
        name: 'last-project-added',
        publication: 'last-project-added',
        params: null
      })
    },
    onStart() {
      subscribe({
        name: 'projects-status-counter',
        publication: 'projects-status-counter',
        params: null
      });
    },
    onStop() {
      unsubscribe('projects-status-counter');
    }
  }
}




export default componentRegisterEnchancer(connect(
  mapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(ProjectsDashboardStat)))
