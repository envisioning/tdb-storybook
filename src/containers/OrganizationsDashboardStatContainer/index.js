import { connect } from 'react-redux'
import OrganizationsDashboardStat from '../../components/OrganizationsDashboardStat'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';

const mapStateToProps = (state, ownProps) => {
  const { isSubsReady } = ownProps

  const organizations = state.client.collections.get('organizations')
  const newest = organizations.size && organizations
    .sort((p1, p2) => p2.get('createdAt') - p1.get('createdAt'))
    .first()
    .get('name') || ''

  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'organizations-total', 'count'], 0),
    newestLink: '#',
    loading: !isSubsReady('organizations-counter') || !isSubsReady('last-organization-added'),
    newest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { subscribe } = ownProps
  return {
    onComponentDidMount() {
      subscribe({
        name: 'organizations-counter',
        publication: 'organizations-counter',
        params: null
      });
      subscribe({
        name: 'last-organization-added',
        publication: 'last-organization-added',
        params: null
      })
    },
  }
}

export default componentRegisterEnchancer(connect(
  mapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(OrganizationsDashboardStat)))
