import React from 'react'
export default (ComposedComponent) => {
    return class extends React.Component {
      componentDidMount() {
        const { onComponentDidMount } = this.props
        if (onComponentDidMount && typeof onComponentDidMount === 'function') {
          onComponentDidMount()
        }
      }
      render() {
        return <ComposedComponent {...this.props} />
      }
    }
}
