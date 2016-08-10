import React, { PropTypes } from 'react'
import { Label } from 'react-bootstrap'
import { Organizations, Projects, Technologies, Attachments } from '../../resources/icons'
import { getEntityColor } from '../../utils/entity_color';

const EntityLabel = ({
  type,
  status,
  text
}) => {
  const getIcon = (type) => {
    switch (type) {
      case 'organizations': return <Organizations />
      case 'technologies': return <Technologies />
      case 'projects': return <Projects />
      case 'attachments': return <Attachments />
    }
  }

  const icon = getIcon();
  const color = getEntityColor(type, status);

  return (
    <Label bsStyle={color}>
        {icon} {text}
    </Label>
  )
}

EntityLabel.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string,
  text: PropTypes.string.isRequired
}
export default EntityLabel
