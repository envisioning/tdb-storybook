import React, { PropTypes } from 'react'
import Panel from '../Panel'

const DashboardStat = ({
  title,
  children
}) => (
  <Panel
    header={<h2> {title} </h2>}>
    {chilren}
  </Panel>
)

DashboardStat.propTypes = {
  title: PropTypes.string.isRequired,
  chidren: PropTypes.element.isRequired
}
