import React, { PropTypes } from 'react'
import TechnologiesDashboardStatContainer from '../../containers/TechnologiesDashboardStatContainer';
import Search from '../../containers/Search'
import { Grid, Row, Col } from 'react-bootstrap'
import TechFilterForm from '../../components/TechFilterForm'
import Sort from '../../components/Sort'

const CRITERIA_OPTIONS = [
  { value: 'name.lower_case_sort', label: 'Name' },
  { value: 'status', label: 'Status' },
  { value: 'readinessNumber', label: 'Readiness' },
  { value: 'createdAt', label: 'Created At' },
  { value: 'updatedAt', label: 'Updated At' },
];

const TechnologiesDashboard = (props) => {
  return (
    <Grid style={{width: 'initial'}}>
      <Row>
        <Col xs={12} md={4}>
          <TechnologiesDashboardStatContainer />
        </Col>
        <Col xs={12} md={8}>
          Latest Updates
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Search
            searchId='technologiesDashboardSearch'
            filterElement={<TechFilterForm />}
            sortElement={<Sort options={[
              { value: 'name.lower_case_sort', label: 'Name' },
              { value: 'status', label: 'Status' },
              { value: 'readinessNumber', label: 'Readiness' },
              { value: 'createdAt', label: 'Created At' },
              { value: 'updatedAt', label: 'Updated At' },
              ]} />}
            />
        </Col>
      </Row>
    </Grid>
  )
}

export default TechnologiesDashboard
