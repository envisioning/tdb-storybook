import React, { Component } from 'react';
import { createClass } from 'asteroid';
import Navbar from '../Navbar';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../../styles/style.scss'
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css'
import 'react-bootstrap-modal/lib/styles/rbm-patch.css'
import 'react-spinkit/css/double-bounce.css'



export default class App extends Component {
  componentWillMount() {
    const { onComponentMustConnect } = this.props

    //  onComponentMustConnect(asteroid);
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar/>
        {children}
      </div>
    );
  }
}
