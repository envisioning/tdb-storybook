import { connect } from 'react-redux'
import AttachmentsDashboardStat from '../../components/AttachmentsDashboardStat'

const mapStateToProps = (state, ownProps) => {
  const ddp = state.client.connection.get('ddp');
  const subs = ddp.subscribe('attachments-counter');
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'attachments-total', 'count'], 0),
    newest: 'some attachment',
    newestLink: '#',
    subs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onReady(ddp) {

    }
  }
}
const AttachmentsDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttachmentsDashboardStat)

export default AttachmentsDashboardStatContainer
