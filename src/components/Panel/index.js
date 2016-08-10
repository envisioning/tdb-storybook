import React, { PropTypes } from 'react'

const Panel = ({
  header,
  children,
  style,
  ...props
}) => (
  <div className="ibox" style={style} {...props}>
    <div className="ibox-title">
      {header}
    </div>
    <div className="ibox-content" style={{height: '100%'}}>
      {children}
    </div>
  </div>
)


Panel.propTypes = {
  header: PropTypes.element,
  children: PropTypes.element
}

export default Panel
