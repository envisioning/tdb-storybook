import React, { PropTypes } from 'react'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'
import App from '../components/App';
import MainDashboard from '../pages/MainDashboard';
import AttachmentEdit from '../pages/AttachmentEdit';
import AttachmentEntry from '../pages/AttachmentEntry';
import AttachmentAdd from '../pages/AttachmentAdd';
import AttachmentsDashboard from '../pages/AttachmentsDashboard';

import OrganizationEntry from '../pages/OrganizationEntry';
import OrganizationAdd from '../pages/OrganizationAdd';
import OrganizationEdit from '../pages/OrganizationEdit';
import OrganizationsDashboard from '../pages/OrganizationsDashboard';

import ProjectEdit from '../pages/ProjectEdit';
import ProjectEntry from '../pages/ProjectEntry';
import ProjectsDashboard from '../pages/ProjectsDashboard';
import ProjectAdd from '../pages/ProjectAdd';

import TechnologiesDashboard from '../pages/TechnologiesDashboard';
import TechnologyEdit from '../pages/TechnologyEdit';
import TechnologyEntry from '../pages/TechnologyEntry';
import TechnologyAdd from '../pages/TechnologyAdd';

const Routes = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MainDashboard}/>
        <Route path="a" component={AttachmentsDashboard} />
        <Route path="a/:id/entry" component={AttachmentEntry} />
        <Route path="a/:id/edit" component={AttachmentEdit} />
        <Route path="a/new" component={AttachmentAdd} />

        <Route path="p" component={ProjectsDashboard}/>
        <Route path="p/:id/entry" component={ProjectEntry} />
        <Route path="a/:id/edit" component={AttachmentEdit} />
        <Route path="a/new" component={AttachmentAdd} />

        <Route path="t" component={TechnologiesDashboard}/>
        <Route path="t/:id/entry" component={TechnologyEntry} />
        <Route path="t/:id/edit" component={TechnologyEdit} />
        <Route path="t/new" component={TechnologyAdd} />

        <Route path="o" component={OrganizationsDashboard}/>
        <Route path="o/:id/entry" component={OrganizationEntry} />
        <Route path="o/:id/edit" component={OrganizationEdit} />
        <Route path="o/new" component={OrganizationAdd} />
      </Route>
    </Router>
  )
}

export default Routes
