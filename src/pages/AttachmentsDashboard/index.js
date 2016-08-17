import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Sort from '../../components/Sort'
import AttachmentFilterForm from '../../components/AttachmentFilterForm'
import Search from '../../containers/Search'
import AttachmentsDashboardStatContainer from '../../containers/AttachmentsDashboardStatContainer';
import { ATTACHMENTS_SORT } from '../../resources/options'

const AttachmentsDashboard = (props) => {
  return (
    <Grid fluid>
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
          <Search
            types={['attachments', 'organizations', 'technologies']}
            searchId='attachmentsDashboardSearch'
            filterElement={<AttachmentFilterForm />}
            sortElement={<Sort options={ATTACHMENTS_SORT} />}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default AttachmentsDashboard
