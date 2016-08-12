import { connect } from 'react-redux'
import TechnologiesDashboardStat from '../../components/TechnologiesDashboardStat'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';

const mapStateToProps = (state, ownProps) => {
  const { isSubsReady } = ownProps

  const technologies = state.client.collections.get('technologies')
  const newest = technologies.size && technologies
    .sort((p1, p2) => p2.get('createdAt') - p1.get('createdAt'))
    .first()
    .get('name') || ''

  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'technologies-total', 'count'], 0),
    published: state.client.collections.getIn(['counts', 'technologies-published', 'count'], 0),
    reviewed: state.client.collections.getIn(['counts', 'technologies-review', 'count'], 0),
    drafts: state.client.collections.getIn(['counts', 'technologies-draft', 'count'], 0),
    newestLink: '#',
    loading: !isSubsReady('technologies-counter') || !isSubsReady('last-technology-added'),
    newest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { subscribe } = ownProps
  return {
    onComponentDidMount() {
      subscribe({
        name: 'technologies-status-counter',
        publication: 'technologies-status-counter',
        params: null
      });
      subscribe({
        name: 'last-technology-added',
        publication: 'last-technology-added',
        params: null
      })
    },
  }
}

export default componentRegisterEnchancer(connect(
  mapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(TechnologiesDashboardStat)))
