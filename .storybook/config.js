import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../src/styles/style.scss'

function loadStories() {
  require('../src/components/MyComponent/stories');
  require('../src/components/DashboardStat/stories');
  require('../src/components/TechnologiesDashboardStat/stories');
  require('../src/components/Panel/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
