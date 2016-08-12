import React, { PropTypes } from 'react';
import { removeDoc, updateDoc, insertDoc, setConnectionState } from '../../actions'
import { connect } from 'react-redux'

class X extends React.Component {
  componentWillMount() {
    const { onShouldSetupListeners, asteroid } = this.props;
    onShouldSetupListeners(asteroid);
  }

  getChildContext() {
    return {
      asteroid: this.props.asteroid
    }
  }
  render() {
    return this.props.children
  }
}
X.childContextTypes = {
  asteroid: PropTypes.object
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShouldSetupListeners(asteroid) {
      console.log('SHOULD SETUP LISTENERS');
      asteroid.ddp.on('added', ({collection, id, fields}) => {
        dispatch(insertDoc({
          doc: {...fields, id},
          id,
          collection,
        }))
      });

      asteroid.ddp.on('removed', ({collection, id}) => {
        dispatch(removeDoc({
          collection,
          id
        }))
      });

      asteroid.ddp.on('changed', ({collection, id, fields}) => {
        dispatch(updateDoc({
          id,
          collection,
          fields
        }));
      });

      asteroid.ddp.on('connected', (e) => {
        dispatch(setConnectionState(true));
      })
    }
  }
}

export const AsteroidProvider = connect(
  null,
  mapDispatchToProps)(X)





export default (fn, ComposedComponent) => {
  class SubscriptionHOC extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        subsReady: false
      }
    }

    componentWillMount() {
      const { onSubsReady } = this.props
      const { asteroid } = this.context;

      const subs = fn(asteroid);

      if (subs) {
        if (Array.isArray(subs)) {
          const necessarySubs = subs.length
          let readySubs = 0;

          subs.forEach(sub => {
            sub.on('ready', () => {
              readySubs++;

              if (necessarySubs === readySubs) {
                this.setState({
                  subsReady: true
                })
              }
            })
          })
        } else {
          subs.on('ready', () => {
            this.setState({
              subsReady: true
            })
          })
        }
      } else {
        console.warn('Your subscriber must return subscription handlers!')
      }
    }


    render() {
      return <ComposedComponent
        {...this.props}
        subsReady={this.state.subsReady}/>
    }
  }

  SubscriptionHOC.contextTypes = {
    asteroid: PropTypes.object
  }

  return SubscriptionHOC;
}
