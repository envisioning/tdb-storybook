import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../src/styles/style.scss'

function loadStories() {
  require('../src/components/MyComponent/stories');
  require('../src/components/Card/stories');
  require('../src/components/TechCard/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
