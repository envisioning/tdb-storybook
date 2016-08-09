import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './bundle.css'



function loadStories() {
  require('../src/components/MyComponent/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
