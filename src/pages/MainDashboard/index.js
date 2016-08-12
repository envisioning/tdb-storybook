import React, { PropTypes } from 'react'
import TechnologiesDashboardStatContainer from '../../containers/TechnologiesDashboardStatContainer';
import ProjectsDashboardStatContainer from '../../containers/ProjectsDashboardStatContainer';
import AttachmentsDashboardStatContainer from '../../containers/AttachmentsDashboardStatContainer';
import OrganizationsDashboardStatContainer from '../../containers/OrganizationsDashboardStatContainer';
import { Grid, Row, Col } from 'react-bootstrap'
const MainDashboard = (props) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <Col xs={12} md={6}>
              <TechnologiesDashboardStatContainer />
            </Col>
            <Col xs={12} md={6}>
              <ProjectsDashboardStatContainer />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <OrganizationsDashboardStatContainer />
            </Col>
            <Col xs={12} md={6}>
              <AttachmentsDashboardStatContainer />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>

        </Col>
      </Row>
    </Grid>
  )
}

export default MainDashboard
