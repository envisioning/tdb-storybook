import React, { PropTypes } from 'react'
import { Panel, PanelHeader, PanelBody, PanelTitle} from '../Panel'
import styles from './styles'
import Spinner from 'react-spinkit';

export const DashboardStatTableItem = ({children}) => (
  <tr>
    <td >{children}</td>
  </tr>
)

const DashboardStat = ({
  iconElementLeft,
  title,
  addLink,
  addText,
  loading,
  children
}) => (
  <Panel>
    <PanelHeader
      title={<PanelTitle iconElementLeft={iconElementLeft} title={title} />}>
    </PanelHeader>
    <PanelBody>
      <a href={addLink} className="btn btn-primary btn-block">
        {addText}
      </a>
      {
        loading ?
        <Spinner spinnerName='double-bounce' style={{margin: 'auto', marginTop: 20, marginBottom: 20}}/>
        :
        <table className="table">
          <tbody>
            {children}
          </tbody>
        </table>
      }
    </PanelBody>
  </Panel>
)

DashboardStat.propTypes = {
  /**
   * Icon element to display at the left of the title
   */
  iconElementLeft: PropTypes.element.isRequired,
  /**
   * The title to display on the panel header
   */
  title: PropTypes.string.isRequired,
  /**
   * Url for the add page of this entity
   */
  addLink: PropTypes.string.isRequired,
  /**
   * Text to display on the add button
   */
  addText: PropTypes.string.isRequired,
  /**
   * Applied to the root element
   */
  children: PropTypes.node
}

export default DashboardStat
