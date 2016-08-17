import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Sort from '../../components/Sort'
import OrgFilterForm from '../../components/OrgFilterForm'
import Search from '../../containers/Search'
import OrganizationsDashboardStatContainer from '../../containers/OrganizationsDashboardStatContainer';
import { ORGANIZATIONS_SORT } from '../../resources/options'

const OrganizationsDashboard = (props) => {
  return (
    <Grid fluid>
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
          <Search
            types={['organizations']}
            searchId='organizationsDashboardSearch'
            filterElement={<OrgFilterForm />}
            sortElement={<Sort options={ORGANIZATIONS_SORT} />}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default OrganizationsDashboard
