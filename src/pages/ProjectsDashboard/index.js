import React, { PropTypes } from 'react'
import ProjectsDashboardStatContainer from '../../containers/ProjectsDashboardStatContainer';

import { Grid, Row, Col } from 'react-bootstrap'
const ProjectsDashboard = (props) => {
  return (
    <Grid style={{width: 'initial'}}>
      <Row>
        <Col xs={12} md={4}>
          <ProjectsDashboardStatContainer />
        </Col>
        <Col xs={12} md={8}>
          Latest Updates
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          Search
        </Col>
      </Row>
    </Grid>
  )
}

export default ProjectsDashboard
