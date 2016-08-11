import React, { PropTypes } from 'react'

class PanelBody extends React.Component {
  static propTypes = {
    /**
     * Can be used to render elements inside the PanelBody.
     */
    children: PropTypes.node,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  }

  render () {
    const {style, children, ...other} = this.props
    const mergedStyles = Object.assign({
      backgroundColor: 'white',
      color: 'inherit',
      padding: '15px 20px 20px 20px',
      borderColor: '#e7eaec',
      borderImage: 'none',
      borderStyle: 'solid solid none',
      borderWidth: '1px 0px'
    }, style)
    return (
      <div style={mergedStyles} {...other}>
        {children}
      </div>
    )
  }
}

export default PanelBody;
