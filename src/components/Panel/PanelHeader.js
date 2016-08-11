import React, { PropTypes } from 'react'

const styles = {
  root: {
    backgroundColor: 'white',
    borderColor: '#e7eaec',
    borderImage: 'none',
    borderStyle: 'solid solid none',
    borderWidth: '3px 0px 0px 0px',
    color: 'inherit',
    marginBottom: 0,
    padding: '14px 15px 7px',
    minHeight: '56px',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginTop: '5px'
  },
  iconElementRightContainer: {
    float: 'right',
    marginTop: '3px'
  }
}

class PanelHeader extends React.Component {
  static propTypes = {
    /**
    * Can be used to render a title in Panel Header.
    */
    title: PropTypes.node,
    /**
    * Override the inline-styles of the root element.
    */
    style: PropTypes.object,
    /**
    * Can be used to render a icon on the right of the Panel Header.
    */
    iconElementRight: PropTypes.element
  }
  render () {
    const { title, iconElementRight, style, children, ...other} = this.props

    return (
      <div style={Object.assign(styles.root, style)} {...other}>
        <span style={styles.titleContainer}>
          {title}
        </span>
        <span style={styles.iconElementRightContainer}>
          {iconElementRight}
        </span>
        {children}
      </div>
    )
  }
}

export default PanelHeader;
