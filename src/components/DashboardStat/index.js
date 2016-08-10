import React, { PropTypes } from 'react'
import Panel from '../Panel'


const DashboardStat = ({
  icon,
  title,
  children
}) => (
  <Panel
    header={<h2><icon /> {title} </h2>}>
    {chilren}
  </Panel>
)

DashboardStat.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  chidren: PropTypes.element.isRequired
}
