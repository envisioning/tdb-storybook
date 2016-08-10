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
  title: {
    marginTop: '5px'
  }
}

class PanelHeader extends React.Component {
  static propTypes = {
    /**
    * Can be used to render a title in Card Header.
    */
   title: PropTypes.node,
    /**
    * Override the inline-styles of the title.
    */
    titleStyle: PropTypes.object,
    /**
    * Can be used to render elements inside the PanelHeader.
    */
    children: PropTypes.node,
    /**
    * Override the inline-styles of the root element.
    */
    style: PropTypes.object,
  }
  render () {
    const { title, titleStyle, style, children, ...other} = this.props
    return (
      <div style={Object.assign(styles.root, style)} {...other}>
        <span style={Object.assign(styles.title, titleStyle)}>
          {title}
        </span>
        {children}
      </div>
    )
  }
}

export default PanelHeader;
