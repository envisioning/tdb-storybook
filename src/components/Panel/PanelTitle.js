import React, { PropTypes } from 'react'

const styles = {
  root: {
    fontWeight: 100,
    float: 'left',
    lineHeight: '1.1',
    display: 'flex',
  },
  iconElementLeft: {
    margin: '0 7px'
  }
}

class PanelTitle extends React.Component {
  static propTypes = {
    iconElementLeft: PropTypes.element,
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
  }

  render () {
    const {iconElementLeft, title, iconElementRight, style, ...other} = this.props

    const iconElementLeftWithStyles = iconElementLeft
    ? React.cloneElement(iconElementLeft , {
      style: styles.iconElementLeft
    })
    : iconElementLeft

    return (
      <h3 style={Object.assign(styles.root, style)} {...other}>
        {iconElementLeftWithStyles} {title}
      </h3>
    )
  }
}

export default PanelTitle
