import React, { PropTypes } from 'react'

const Panel = ({
  header,
  children
}) => (
  <div className="ibox">
    <div className="ibox-title">
      {header}
    </div>
    <div className="ibox-content">
      {children}
    </div>
  </div>
)


Panel.propTypes = {
  header: PropTypes.element,
  children: PropTypes.element
}

export default Panel
