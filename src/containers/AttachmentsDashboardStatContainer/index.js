import { connect } from 'react-redux'
import AttachmentsDashboardStat from '../../components/AttachmentsDashboardStat'

const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.collections.getIn(['counts', 'attachments-total', 'count'], 0),
    newest: 'some attachment',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const AttachmentsDashboardStatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttachmentsDashboardStat)

export default AttachmentsDashboardStatContainer
