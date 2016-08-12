import { connect } from 'react-redux'
import App from '../../components/App'
import { setupDdpClient } from '../../actions'
const mapStateToProps = (state, ownProps) => {
  return {
    addLink: '#',
    total: state.client.collections.getIn(['counts', 'attachments-total', 'count'], 0),
    newest: 'some attachment',
    newestLink: '#'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComponentMustConnect(asteroid) {
      dispatch(setupDdpClient(asteroid))
    }
  }
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
