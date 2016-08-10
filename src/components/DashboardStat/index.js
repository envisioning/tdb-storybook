import React, { PropTypes } from 'react'
import Panel from '../Panel'
import styles from './styles'

export const DashboardStatTableItem = ({children}) => (
  <tr>
    <td >{children}</td>
  </tr>
)

const DashboardStat = ({
  icon,
  title,
  addLink,
  addText,
  children
}) => (
  <Panel className="ibox dashboard-stat"
    header={<h2>{icon} {title}</h2>}>
    <a href={addLink} className="btn btn-primary btn-block">
      {addText}
    </a>
    <table className="table">
      <tbody>
        {children}
      </tbody>
    </table>
  </Panel>
)

DashboardStat.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  addLink: PropTypes.string.isRequired,
  addText: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default DashboardStat
