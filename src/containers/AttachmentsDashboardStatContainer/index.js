import React from 'react';
import { connect } from 'react-redux'
import AttachmentsDashboardStat from '../../components/AttachmentsDashboardStat'
import subscriptionHOC from '../../components/subscriptionHOC';

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'attachments-total', 'count'], 0),
    newest: 'some attachment',
    newestLink: '#',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}


const subscriber = (ddp) => {
    const handler = ddp.subscribe('attachments-counter');
    return handler
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(subscriptionHOC(subscriber, AttachmentsDashboardStat))
