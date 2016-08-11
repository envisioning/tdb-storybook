import React, { PropTypes } from 'react'
import DashboardStat, { DashboardStatTableItem } from '../DashboardStat'
import { Projects } from '../../resources/icons'

const ProjectsDashboardStat = ({
  addLink,
  total,
  active,
  prospecting,
  closed,
  newest,
  newestLink
}) => (
  <DashboardStat
    iconElementLeft={<Projects />}
    title="Projects"
    addLink={addLink}
    addText="Add a new Project" >
    <DashboardStatTableItem>
      We have <b>{total}</b> Projects on TDB
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{active}</b> of them are active
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{prospecting}</b> of them are prospecting
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{closed}</b> of them are closed
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      The newest one is <a className="label label-outline" href={newestLink}>{newest}</a>
    </DashboardStatTableItem>
  </DashboardStat>
)

ProjectsDashboardStat.propTypes = {
  /**
   * Url for the projects add page
   */
  addLink: PropTypes.string.isRequired,
  /**
   * Total amount of projects
   */
  total: PropTypes.number.isRequired,
  /**
   * Number of active projects
   */
  active: PropTypes.number.isRequired,
  /**
   * Number os propecting projects
   */
  prospecting: PropTypes.number.isRequired,
  /**
   * Number os closed projects
   */
  closed: PropTypes.number.isRequired,
  /**
   * Newest project name
   */
  newest: PropTypes.string.isRequired,
  /**
   * Newest project permalink
   */
  newestLink: PropTypes.string.isRequired,
}

export default ProjectsDashboardStat;
