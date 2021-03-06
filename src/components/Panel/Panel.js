import React, { Component, PropTypes } from 'react'

class Panel extends React.Component {
  static propTypes = {
    /**
     * Can be used to render elements inside the Panel.
     */
    children: PropTypes.node,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  }
  render() {
    const { style, children, ...other} = this.props

    const mergedStyles = Object.assign({
      clear: 'both',
      marginBottom: '25px',
      marginTop: 0,
      padding: 0,
      boxShadow: '2px 2px 11px 0px rgba(0, 0 ,0 , 0.1)'
    }, style)

    return (
      <div style={mergedStyles} {...other}>
        {children}
      </div>
    )
  }
}

export default Panel
