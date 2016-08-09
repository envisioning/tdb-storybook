import { configure } from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.min.css';

function loadStories() {
  require('../src/components/MyComponent/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
