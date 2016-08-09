import React, {PropTypes} from 'react'
import DashboardStat from '../DashboardStat'

const TechnologiesDashboardStat = ({
  icon,
  title,
  total,
  published,
  review,
  draft,

}) => (
  <DashboardStat
    icon={icon}
    title={title}>
    <table>
      <tbody>
    </table>
  </DashboardStat>
)

TechnologiesDashboardStat.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  published: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
  draft: PropTypes.number.isRequired,

}
