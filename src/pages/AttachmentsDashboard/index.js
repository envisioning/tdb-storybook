import React, { PropTypes } from 'react'
import AttachmentsDashboardStatContainer from '../../containers/AttachmentsDashboardStatContainer';

import { Grid, Row, Col } from 'react-bootstrap'
const AttachmentsDashboard = (props) => {
  return (
    <Grid style={{width: 'initial'}}>
      <Row>
        <Col xs={12} md={4}>
          <AttachmentsDashboardStatContainer />
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

export default AttachmentsDashboard
