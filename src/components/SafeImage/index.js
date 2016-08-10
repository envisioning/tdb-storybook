import React, { PropTypes } from 'react'

const PLACEHOLDER = 'http://wesyoo.com/wp-content/uploads/2016/07/404-not-found-error-page-examples-1-300x200.png';

class SafeImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errored: false
    }
    this.handleError = this.handleError.bind(this)
  }

  handleError() {
    this.setState({
      errored: true
    })
  }

  render () {
    const { src, ...props } = this.props
    const { errored } = this.state

    if (errored) {
      return (
        <img src={PLACEHOLDER} />
      )
    } else {
      return (
        <img src={src} {...props} onError={this.handleError} />
      )
    }
  }
}

export default SafeImage;
