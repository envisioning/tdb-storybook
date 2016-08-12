import React, { PropTypes } from 'react'
import TechnologiesDashboardStatContainer from '../../containers/TechnologiesDashboardStatContainer';
import ProjectsDashboardStatContainer from '../../containers/ProjectsDashboardStatContainer';
import AttachmentsDashboardStatContainer from '../../containers/AttachmentsDashboardStatContainer';
import OrganizationsDashboardStatContainer from '../../containers/OrganizationsDashboardStatContainer';
import { Grid, Row, Col } from 'react-bootstrap'


// class MainDashboard extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//     this.handleClick2 = this.handleClick2.bind(this)
//     this.state = {
//       show: false,
//       show2: false
//     }
//   }
//
//   handleClick() {
//     this.setState({
//       show: !this.state.show
//     })
//   }
//   handleClick2() {
//     this.setState({
//       show2: !this.state.show2
//     })
//   }
//   render () {
//     return (
//       <div>
//
//       <div>
//         <a href="#" onClick={this.handleClick}>TOGGLE</a>
//         {
//           this.state.show &&
//           <div>
//             <ProjectsDashboardStatContainer />
//           </div>
//         }
//       </div>
//
//       <div>
//         <a href="#" onClick={this.handleClick2}>TOGGLE</a>
//         {
//           this.state.show2 &&
//           <div>
//             <ProjectsDashboardStatContainer />
//           </div>
//         }
//       </div>
//     </div>
//     )
//   }
// }
//
// export default MainDashboard;


const MainDashboard = (props) => {
  return (
    <Grid style={{width: 'initial'}}>
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
