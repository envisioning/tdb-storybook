import React, { PropTypes } from 'react'
import DashboardStat, { DashboardStatTableItem } from '../DashboardStat'
import { Attachments } from '../../resources/icons'

const AttachmentsDashboardStat = ({
  addLink,
  total,
  active,
  prospecting,
  closed,
  newest,
  newestLink,
  subsReady
}) => (
  <DashboardStat
    iconElementLeft={<Attachments />}
    title="Attachments"
    addLink={addLink}
    addText="Add a new Attachment" >
    <DashboardStatTableItem>
      We have <b>{total}</b> attachments on TDB {subsReady ? 'ready' : 'not-ready'}
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      The newest one is <a className="label label-outline" href={newestLink}>{newest}</a>
    </DashboardStatTableItem>
  </DashboardStat>
)

AttachmentsDashboardStat.propTypes = {
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

export default AttachmentsDashboardStat;
