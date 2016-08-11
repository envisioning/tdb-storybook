import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../src/styles/style.scss'
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css'
import 'react-bootstrap-modal/lib/styles/rbm-patch.css'
function loadStories() {
  require('../src/components/TechCard/stories.js');
  require('../src/components/OrgCard/stories');
  require('../src/components/AttachmentCard/stories');
  require('../src/components/ProjectCard/stories');
  require('../src/components/DashboardStat/stories');
  require('../src/components/TechnologiesDashboardStat/stories');
  require('../src/components/ProjectsDashboardStat/stories');
  require('../src/components/Panel/stories');
  require('../src/components/CardGrid/stories');
  require('../src/components/RecentUpdates/stories');
  require('../src/components/EntityLabel/stories');
  require('../src/components/SearchInput/stories');
  require('../src/components/SearchMetadata/stories');
  require('../src/components/Sort/stories');
  require('../src/components/TechFilterForm/stories');
  require('../src/components/ProjectFilterForm/stories');
  require('../src/components/AttachmentFilterForm/stories');
  require('../src/components/OrgFilterForm/stories');
  require('../src/components/InviteUserForm/stories');
  require('../src/components/DisplayRelations/stories');
  require('../src/components/ResultsList/stories');
  require('../src/components/BuildRelation/stories');
  require('../src/components/ProjectEditForm/stories');
  require('../src/components/ProjectQuickAddForm/stories');
  require('../src/components/OrganizationEditForm/stories');
  require('../src/components/FileInput/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
