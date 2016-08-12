import React, { PropTypes } from 'react';
import { registerComponent, unregisterComponent, registerComponentSubscription } from '../../actions/subscriptions';
import { setupHandler, unregisterHandler, decreaseHandlerCounter} from '../../actions/handlers'
import { removeSubscription } from '../../actions/subscriptions';


import asteroid from '../../asteroid';

export default (ComposedComponent) => {
  class Enchancer extends React.Component {
    componentWillMount() {
      const componentId = this._reactInternalInstance._rootNodeID
      this.componentId = componentId
      this.context.store.dispatch(registerComponent({
        componentId
      }))

      this.isSubsReady = this.isSubsReady.bind(this)
      this.subscribe = this.subscribe.bind(this)
      this.unsubscribe = this.unsubscribe.bind(this)

      this.state = {
        handlers: []
      }
    }

    componentWillUnmount() {
      this.context.store.dispatch(unregisterComponent(this.componentId))
    }

    isSubsReady(name){
      const state = this.context.store.getState()
      const handlerId = state.client.subscriptions.getIn([this.componentId, name], false);
      if (!handlerId) return true;
      return state.client.handlers.getIn([handlerId, 'isReady'], true);
    }

    subscribe({name, publication, params }) {
      const dispatch = this.context.store.dispatch;
      let handler;
      if (params) {
        handler = asteroid.subscribe(publication, params)
      } else {
        handler = asteroid.subscribe(publication)
      }

      dispatch(setupHandler(handler, this.componentId))
      dispatch(registerComponentSubscription(this.componentId, handler.id, name))
    }

    unsubscribe(name) {
      const state = this.context.store.getState();
      const dispatch = this.context.store.dispatch;

      const handlerId = state.client.subscriptions.getIn([this.componentId, name]);
      if (state.client.handlers.getIn([handlerId, 'counter']) === 1) {
        dispatch(unregisterHandler(handlerId))
      } else {
        dispatch (decreaseHandlerCounter(handlerId))
      }

      dispatch(removeSubscription(this.componentId, name))
    }
    render() {
      return <ComposedComponent
        {...this.props}
        isSubsReady={this.isSubsReady}
        subscribe={this.subscribe}
        unsubscribe={this.unsubscribe}
        componentId={this.componentId} />
    }
  }

  Enchancer.contextTypes = {
    store: PropTypes.object
  }

  return Enchancer
}
