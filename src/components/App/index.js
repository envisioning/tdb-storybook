import React, { Component } from 'react';
import { createClass } from 'asteroid';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../../styles/style.scss'
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css'
import 'react-bootstrap-modal/lib/styles/rbm-patch.css'

const SERVER_IP = 'ws://tdbstaging.meteorapp.com/websocket'


export default class App extends Component {
  componentWillMount() {
    const { onComponentMustConnect } = this.props
    const Asteroid = createClass();
    const asteroid = new Asteroid({
        endpoint: SERVER_IP
    });
    onComponentMustConnect(asteroid);
  }
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}
