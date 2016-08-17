import React, { PropTypes } from 'react'
import TechnologiesDashboardStatContainer from '../../containers/TechnologiesDashboardStatContainer';
import Search from '../../containers/Search'
import { Grid, Row, Col } from 'react-bootstrap'
import TechFilterForm from '../../components/TechFilterForm'
import Sort from '../../components/Sort'
import { TECHNOLOGIES_SORT } from '../../resources/options'

const TechnologiesDashboard = (props) => {
  return (
    <Grid fluid>
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
            types={['technologies']}
            searchId='technologiesDashboardSearch'
            filterElement={<TechFilterForm />}
            sortElement={<Sort options={TECHNOLOGIES_SORT} />}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default TechnologiesDashboard
