import React, { Component } from 'react';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'sweetalert/dist/sweetalert.css';
import '../../styles/style.scss'
import 'react-select/dist/react-select.css';
import 'rc-slider/assets/index.css'
import 'react-bootstrap-modal/lib/styles/rbm-patch.css'
import CardGrid from '../CardGrid'
import { mockA } from '../CardGrid/mock'

export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}
