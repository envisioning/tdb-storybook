import React, { PropTypes } from 'react'
import DashboardStat, { DashboardStatTableItem } from '../DashboardStat'
import { Organizations } from '../../resources/icons'

const OrganizationsDashboardStat = ({
  addLink,
  total,
  active,
  prospecting,
  closed,
  newest,
  newestLink
}) => (
  <DashboardStat
    iconElementLeft={<Organizations />}
    title="Organizations"
    addLink={addLink}
    addText="Add a new Organization" >
    <DashboardStatTableItem>
      We have <b>{total}</b> organizations on TDB
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      The newest one is <a className="label label-outline" href={newestLink}>{newest}</a>
    </DashboardStatTableItem>
  </DashboardStat>
)

OrganizationsDashboardStat.propTypes = {
  /**
   * Url for the projects add page
   */
  addLink: PropTypes.string.isRequired,
  /**
   * Total amount of projects
   */
  total: PropTypes.number.isRequired,
  /**
   * Newest project name
   */
  newest: PropTypes.string.isRequired,
  /**
   * Newest project permalink
   */
  newestLink: PropTypes.string.isRequired,
}

export default OrganizationsDashboardStat;
