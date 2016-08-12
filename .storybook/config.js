import { configure } from '@kadira/storybook';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../src/styles/style.scss'
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css'
import 'react-bootstrap-modal/lib/styles/rbm-patch.css'
import infoAddon from '@kadira/react-storybook-addon-info';

configure(() => {
  const context = require.context('../src/components/', true, /stories\.js$/)
  context.keys().forEach(context)
}, module);
