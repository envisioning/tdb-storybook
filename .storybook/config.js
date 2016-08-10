import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../src/styles/style.scss'

function loadStories() {
  require('../src/components/TechCard/stories.js');
  require('../src/components/OrgCard/stories');
  require('../src/components/AttachmentCard/stories');
  require('../src/components/ProjectCard/stories');
  require('../src/components/DashboardStat/stories');
  require('../src/components/TechnologiesDashboardStat/stories');
  require('../src/components/Panel/stories');
  require('../src/components/CardGrid/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
