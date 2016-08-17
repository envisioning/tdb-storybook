import React, { PropTypes } from 'react'
import OrganizationsDashboardStatContainer from '../../containers/OrganizationsDashboardStatContainer';

import { Grid, Row, Col } from 'react-bootstrap'
const OrganizationsDashboard = (props) => {
  return (
    <Grid style={{width: 'initial'}}>
      <Row>
        <Col xs={12} md={4}>
          <OrganizationsDashboardStatContainer />
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

export default OrganizationsDashboard
