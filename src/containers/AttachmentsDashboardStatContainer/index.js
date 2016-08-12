import React from 'react';
import { connect } from 'react-redux'
import AttachmentsDashboardStat from '../../components/AttachmentsDashboardStat'
import componentRegisterEnchancer from '../../components/ComponentRegisterEnchancer'
import componentMountEmitter from '../../components/ComponentMountEmitter';

const mapStateToProps = (state, ownProps) => {
  const { isSubsReady } = ownProps

  const attachments = state.client.collections.get('attachments')
  const newest = attachments.size && attachments
    .sort((p1, p2) => p2.get('createdAt') - p1.get('createdAt'))
    .first()
    .get('name') || ''

  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'attachments-total', 'count'], 0),
    newestLink: '#',
    loading: !isSubsReady('attachments-counter') || !isSubsReady('last-attachment-added'),
    newest
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { subscribe, unsubscribe } = ownProps
  return {
    onComponentDidMount() {
      subscribe({
        name: 'attachments-counter',
        publication: 'attachments-counter',
        params: null
      });
      subscribe({
        name: 'last-attachment-added',
        publication: 'last-attachment-added',
        params: null
      })
    },
  }
}


export default componentRegisterEnchancer(connect(
  mapStateToProps,
  mapDispatchToProps
)(componentMountEmitter(AttachmentsDashboardStat)))
