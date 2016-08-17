import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Sort from '../../components/Sort'
import ProjectFilterForm from '../../components/ProjectFilterForm'
import Search from '../../containers/Search'
import ProjectsDashboardStatContainer from '../../containers/ProjectsDashboardStatContainer';
import { PROJECTS_SORT } from '../../resources/options'

const ProjectsDashboard = (props) => {
  return (
    <Grid fluid>
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
          <Search
            types={['projects']}
            searchId='projectsDashboardSearch'
            filterElement={<ProjectFilterForm />}
            sortElement={<Sort options={PROJECTS_SORT} />}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default ProjectsDashboard
