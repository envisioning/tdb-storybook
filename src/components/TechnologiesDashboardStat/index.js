import React, {PropTypes} from 'react'
import DashboardStat, { DashboardStatTableItem } from '../DashboardStat'
import { Label } from 'react-bootstrap'
import { Technologies } from '../../resources/icons'

const TechnologiesDashboardStat = ({
  addLink,
  total,
  published,
  reviewed,
  drafts,
  newest,
  newestLink
}) => (
  <DashboardStat
    iconElementLeft={<Technologies />}
    title="Technologies"
    addText="Add a new Technology"
    addLink={addLink}>
    <DashboardStatTableItem>
      We have <b>{total}</b> Technologies on TDB
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{published}</b> of them are <Label bsStyle="primary">Published</Label>
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{reviewed}</b> of them are <Label bsStyle="warning">Under Review</Label>
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      <b>{drafts}</b> of them are <Label bsStyle="danger">Drafts</Label>
    </DashboardStatTableItem>
    <DashboardStatTableItem>
      The newest one is <a className="label label-outline" href={newestLink}>{newest}</a>
    </DashboardStatTableItem>
  </DashboardStat>
)

TechnologiesDashboardStat.propTypes = {
  addLink: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  published: PropTypes.number.isRequired,
  reviewed: PropTypes.number.isRequired,
  drafts: PropTypes.number.isRequired,
  newest: PropTypes.string.isRequired,
  newestLink: PropTypes.string.isRequired,
}

export default TechnologiesDashboardStat
