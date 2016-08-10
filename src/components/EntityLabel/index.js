import React, { PropTypes } from 'react'
import { Label } from 'react-bootstrap'
import { Organizations, Projects, Technologies, Attachments, Collections } from '../../resources/icons'
import { getEntityColor } from '../../utils/entity_color';

const EntityLabel = ({
  type,
  status,
  text,
  style,
  truncate = false,
  ...props
}) => {
  const getIcon = (type) => {
    switch (type) {
      case 'organizations': return <Organizations />
      case 'technologies': return <Technologies />
      case 'projects': return <Projects />
      case 'attachments': return <Attachments />
      case 'collections': return <Collections />
    }
  }

  const icon = getIcon(type);
  const color = getEntityColor(type, status);

  const truncateStyle = truncate ? {overflow: 'hidden', textOverflow: 'ellipsis'} : {}
  return (
    <Label bsStyle={color} style={{display: 'inline-block', ...style, ...truncateStyle}} {...props}>
        {icon} <span>{text}</span>
    </Label>
  )
}

EntityLabel.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string,
  text: PropTypes.string.isRequired,
  truncate: PropTypes.bool
}
export default EntityLabel
